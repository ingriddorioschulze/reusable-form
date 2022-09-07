import React from "react";
import styled from "styled-components";

import Form from "./Form";
import FormInput from "./FormInput";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const HeaderStyled = styled.header`
  display: flex;
  font-size: 30px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;
const FormContainer = styled.div`
  margin-top: 30px;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <HeaderStyled>Reusable Form</HeaderStyled>
      <FormContainer>
        <Form
          onSubmit={(value) =>
            alert(
              `Form submitted with the values: ${value.firstName},${value.lastName},${value.email}`
            )
          }
        >
          <FormInput
            type="text"
            id="firstName"
            name="firstName"
            label="First Name: "
            placeholder="Enter your first name"
          />
          <FormInput
            type="text"
            id="lastName"
            name="lastName"
            label="Last Name: "
            placeholder="Enter your last name"
          />
          <FormInput
            type="email"
            id="email"
            name="email"
            label="Email: "
            placeholder="Enter your email"
          />
        </Form>
      </FormContainer>
    </AppContainer>
  );
};

export default App;
