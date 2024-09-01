/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page, {generateMetadata} from "./page";

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Ken 1 year should be in the document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Ken 1 year")).toBeInTheDocument();
});

it("Wellcome to HCM should be in the document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Wellcome to HCM")).toBeInTheDocument();
});

it("Test commit CICD should be in the document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Test commit CICD")).toBeInTheDocument();
});

it("renders correctly with an empty slug", () => {
  render(<Page params={{ slug: "" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: ");
});

it("generateMetadata should return correct metadata for a given slug", async () => {
  const metadata = await generateMetadata({ params: { slug: "Test" } });
  expect(metadata).toEqual({ title: "Post: Test" });
});

it("generateMetadata should return correct metadata for an empty slug", async () => {
  const metadata = await generateMetadata({ params: { slug: "" } });
  expect(metadata).toEqual({ title: "Post: " });
});