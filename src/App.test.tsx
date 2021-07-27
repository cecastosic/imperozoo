import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders adopt an animal link", () => {
  render(<App />);
  const adoptAnimalLink = screen.getByText(/adopt an animal/i);
  expect(adoptAnimalLink).toBeInTheDocument();
});
