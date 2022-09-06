import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <FormContext.Provider value={{ form: value, handleFormChange }}>
        {props.children}
      </FormContext.Provider>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
