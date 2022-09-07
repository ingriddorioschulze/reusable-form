import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";



describe("App", () => {
  it("should render the first form field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter your first name")).toBeInTheDocument();
  });
  it("should render the second form field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter your last name")).toBeInTheDocument();
  });
  it("should render the third form field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("should render the submit button", () => {
    render(<App />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

});
