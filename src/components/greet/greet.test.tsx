import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const txtElement = screen.getByText(/Hello/i);
  expect(txtElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Bruno" />);
  const txtElement = screen.getByText(/^hello+/i);
  expect(txtElement).toBeInTheDocument();
});
