import React from "react";
import styled from "styled-components";

import Form from "./Form";
import FormInput from "./FormInput";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`
const HeaderStyled = styled.header`
  display: flex;
  font-size: 30px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`
const FormContainer = styled.div`
  margin-top: 30px;
`

const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer>
      <HeaderStyled>Reusable Form</HeaderStyled>
      <FormContainer>
        <Form onSubmit={() => alert("Form submitted!")}>
          <FormInput
            type="text"
            id="firstName"
            name="First Name"
            label="First Name: "
            placeholder="Enter your First Name"
          />
          <FormInput
            type="text"
            id="lastName"
            name="Last Name"
            label="Last Name: "
            placeholder="Enter your Last Name"
          />
          <FormInput
            type="text"
            id="city"
            name="City"
            label="City: "
            placeholder="Enter your City"
          />
        </Form>
      </FormContainer>
    </AppContainer>
  );
};

export default App;
