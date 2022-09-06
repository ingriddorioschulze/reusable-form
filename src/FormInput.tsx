import React, { useContext } from "react";
import { FormContext } from "./Form";

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
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
        value={form[props.name] || ""}
        onChange={(event) => handleFormChange(props.name, event.target.value)}
      />
    </div>
  );
};

export default FormInput;
