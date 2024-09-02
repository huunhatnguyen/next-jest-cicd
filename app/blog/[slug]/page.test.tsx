/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page, {generateMetadata} from "./page";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { act } from 'react-dom/test-utils';
/* eslint-enable @typescript-eslint/no-unused-vars */

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Ken should be in the document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Ken")).toBeInTheDocument();
});

it("Wellcome to HCM should be in the document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Wellcome to HCM")).toBeInTheDocument();
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