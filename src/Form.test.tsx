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
          placeholder="First Name"
        />
        <FormInput
          type="text"
          id="lastName"
          name="Last Name"
          label="Last Name"
          placeholder="Last Name"
        />
        <FormInput
          type="text"
          id="city"
          name="City"
          label="City"
          placeholder="City"
        />
      </Form>
    );
    const inputFirstName = screen.getByPlaceholderText("First Name")
    userEvent.type(inputFirstName,'Michael')
    const inputLastName = screen.getByPlaceholderText("Last Name")
    userEvent.type(inputLastName,'Jackson')
    const inputCity = screen.getByPlaceholderText("City")
    userEvent.type(inputCity,'Neverland-Ranch')
    
    fireEvent.click(screen.getByText("Submit"));
    expect(handleSubmit).toHaveBeenCalledWith({
      "First Name": "Michael",
      "Last Name": "Jackson",
      "City": "Neverland-Ranch",
    });
  });
});
