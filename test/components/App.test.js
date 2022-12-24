import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../src/components/App";

test("dummy", () => {
  render(<App />);
  const title = screen.getByText(/typing game/i);
  expect(title).toBeInTheDocument();
});
