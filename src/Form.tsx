import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  `
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SubmitButton = styled.button`
  height: 30px;
  font-size: 14px;
  margin-top: 15px;
  font-weight: bold;
  border: 1px black solid;
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
`

export const FormContext = React.createContext({
  form: {} as Record<string, string>,
  handleFormChange: (name: string, value: string) => {},
});

type FormProperties = React.PropsWithChildren<{
  onSubmit: (value: Record<string, string>) => unknown;
}>;

const Form: React.FC<FormProperties> = (props: FormProperties): JSX.Element => {
  const [value, setValue] = useState<Record<string, string>>({});

  const handleFormChange = (name: string, newValue: string) => {
    setValue({
      ...value,
      [name]: newValue,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(value);
    setValue({});
  };
  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormContext.Provider value={{ form: value, handleFormChange }}>
          {props.children}
        </FormContext.Provider>
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
