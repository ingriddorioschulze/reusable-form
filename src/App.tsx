import React from 'react';
import Form from './Form';

const App: React.FC = (): JSX.Element => {

  return (
    <div className="App">
      <header className="App-header">
       <Form onSubmit={() => console.log("form submited! :)")}/>
      </header>
    </div>
  );
}

export default App;
