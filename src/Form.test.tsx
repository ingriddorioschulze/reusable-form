import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Form from "./Form";
import FormInput from "./FormInput";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  it("should call a function to submit the form", () => {
    const handleSubmit = jest.fn();
    render(
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          id="firstName"
          name="First Name"
          label="First Name"
          placeholder="Enter your first name"
        />
        <FormInput
          type="text"
          id="lastName"
          name="Last Name"
          label="Last Name"
          placeholder="Enter your last name"
        />
        <FormInput
          type="email"
          id="email"
          name="Email"
          label="Email"
          placeholder="Enter your email"
        />
      </Form>
    );
    const inputFirstName = screen.getByPlaceholderText("Enter your first name")
    userEvent.type(inputFirstName,'Michael')
    const inputLastName = screen.getByPlaceholderText("Enter your last name")
    userEvent.type(inputLastName,'Jackson')
    const inputCity = screen.getByPlaceholderText("Enter your email")
    userEvent.type(inputCity,'michael.jackson@email.com')
    
    fireEvent.click(screen.getByText("Submit"));
    expect(handleSubmit).toHaveBeenCalledWith({
      "First Name": "Michael",
      "Last Name": "Jackson",
      "Email": "michael.jackson@email.com",
    });
  });
});
