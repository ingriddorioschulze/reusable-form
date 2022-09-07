import React, { useContext } from "react";
import styled from "styled-components";

import { FormContext } from "./Form";

const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const StyledLabel = styled.label`
  margin: 5px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`
const StyledInput = styled.input`
  width: 250px;
  height: 20px;
  
  ::placeholder {
    font-size: 12px;
    text-align: center;
  }
`

type FormInputProperties = {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
};

const FormInput: React.FC<FormInputProperties> = (
  props: FormInputProperties
): JSX.Element => {
  const { form, handleFormChange } = useContext(FormContext);

  return (
    <FormInputContainer>
      <StyledLabel>{props.label}</StyledLabel>
      <StyledInput
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
        value={form[props.name] || ""}
        onChange={(event) => handleFormChange(props.name, event.target.value)}
      />
    </FormInputContainer>
  );
};

export default FormInput;
