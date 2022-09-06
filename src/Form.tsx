import React, {useState} from "react";

type FormProperties = {
  onSubmit: (name:string) => unknown;
};


const Form: React.FC <FormProperties> = (props: FormProperties): JSX.Element => {
    const [value, setValue] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onSubmit(value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          required
          value={value}
          onChange={(event => setValue(event.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
