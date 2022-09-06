import React from "react";
import Form from "./Form";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <Form
          label=""
          type={"text"}
          id={"Name"}
          name={"Name"}
          placeholder={"Name"}
          onSubmit={() => alert("form submited! :)")}
        />
      </header>
    </div>
  );
};

export default App;
