import React from 'react';

const Form: React.FC = (): JSX.Element => {
  return (
    <div>
      <form>
      <input type="text" id="name" name="name" placeholder="Name" required/>
      <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default Form;
