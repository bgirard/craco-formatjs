import { render, screen } from "@testing-library/react";
import App from "./App";

test("Translation", () => {
  render(<App />);
  const linkElement = screen.getByText(/Today is/i);
  expect(linkElement).toBeInTheDocument();
});
