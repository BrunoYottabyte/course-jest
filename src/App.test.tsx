import { render, screen } from "@testing-library/react";
import App from "./App";

test("Page default in vite", () => {
  render(<App />);
  const linkElement = screen.getByText(/Click on the vite/i);
  expect(linkElement).toBeInTheDocument();
});
