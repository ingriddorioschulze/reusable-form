import React, { useState } from "react";

type FormProperties = {
// define a default "text" to type but still allow to change it for number, for example
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  onSubmit: (name: string) => unknown;
};

const Form: React.FC<FormProperties> = (props: FormProperties): JSX.Element => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(value);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          required
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
