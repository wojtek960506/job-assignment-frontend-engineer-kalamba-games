// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { ReactNode } from "react";


jest.mock("./api/axios", () => ({
  api: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

// eslint-disable-next-line react/display-name
jest.mock("react-markdown", () => (
  { children }: { children: ReactNode }
) => {children});
