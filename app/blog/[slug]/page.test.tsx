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

it("Ken should be in the document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("Ken")).toBeInTheDocument();
});

it("generateMetadata should return correct metadata", async () => {
  const metadata = await generateMetadata({ params: { slug: "Test" } });
  expect(metadata).toEqual({ title: "Post: Test" });
});
