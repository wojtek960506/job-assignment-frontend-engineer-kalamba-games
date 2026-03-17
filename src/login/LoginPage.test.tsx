import { LoginPage } from "./LoginPage";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as usersApi from "api/users-api";
import { act } from "react-dom/test-utils";
import { renderWithProviders } from "test-utils/renderWithProviders";

const userMock = {
  email: "string",
  token: "string",
  username: "string",
  bio: "string",
  image: "string",
}

test("renders LoginPage", () => {
  renderWithProviders(<LoginPage />);

  const signInElements = screen.getAllByText(/Sign in/);
  expect(signInElements).toHaveLength(2);
});

test("user properly authenticated", async () => {
  jest.spyOn(usersApi, "authenticateUser").mockResolvedValue(userMock);

  renderWithProviders(<LoginPage />);

  const emailInput = screen.getByTestId("email-input");
  const passwordInput = screen.getByTestId("password-input");
  const signInButton = screen.getByTestId("sign-in-button");

  const [email, password] = ["email", "password"];

  userEvent.type(emailInput, email);
  userEvent.type(passwordInput, password);

  await act(async () => {
    userEvent.click(signInButton);
  }) 

  expect(usersApi.authenticateUser).toHaveBeenCalledTimes(1);
  expect(usersApi.authenticateUser).toHaveBeenCalledWith({ email, password });

  expect(screen.queryByTestId("login-error")).not.toBeInTheDocument();
});


test("user properly authenticated", async () => {
  jest.spyOn(usersApi, "authenticateUser").mockRejectedValue("error");

  renderWithProviders(<LoginPage />);

  const signInButton = screen.getByTestId("sign-in-button");

  await act(async () => {
    userEvent.click(signInButton);
  }) 

  expect(usersApi.authenticateUser).toHaveBeenCalledTimes(1);
  expect(usersApi.authenticateUser).toHaveBeenCalledWith({ email: "", password: "" });

  expect(screen.queryByTestId("login-error")).toBeInTheDocument();
});