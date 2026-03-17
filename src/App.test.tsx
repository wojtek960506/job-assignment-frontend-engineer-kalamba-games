import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "test-utils/renderWithProviders";

jest.mock("./article", () => ({
  ArticlePage: () => <div>ArticlePage</div>,
  ArticleListPage: () => <div>ArticleListPage</div>,
}));

jest.mock("./login", () => ({
  LoginPage: () => <div>LoginPage</div>,
}));

jest.mock("./profile", () => ({
  ProfilePage: () => <div>ProfilePage</div>,
}));

test("renders conduit title", () => {
  renderWithProviders(<App />);
  const titleElement = screen.getAllByText(/conduit/i)[0];
  expect(titleElement).toBeInTheDocument();
});
