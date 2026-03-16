import { LoginPage } from "./LoginPage";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "test-utils/renderWithProviders";

test("renders LoginPage", () => {
  renderWithProviders(<LoginPage />);

  const signInElements = screen.getAllByText(/Sign in/);
  expect(signInElements).toHaveLength(2);
});
