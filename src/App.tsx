import React from "react";
import Form from "./Form";
import FormInput from "./FormInput";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={() => alert("Form submitted!")}>
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
      </header>
    </div>
  );
};

export default App;
