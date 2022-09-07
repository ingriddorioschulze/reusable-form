# about

Reusable and generic form component.
# technologies

- React
- Typescript
- styled components
- React Testing Library

# instructions

1.  clone repository

    ```bash
    git clone https://github.com/ingriddorioschulze/reusable-form
    cd reusable-form
    ```

2.  install dependencies

    ```bash
    npm install
    ```

3.  start the application

    ```bash
    npm start
    ```

4.  run the tests

    ```bash
    npm test
    ```

# description

- The form manages its own state being just rendered by App.
- A working use case for this App would be a registration form with first name, last name, email and password fields and/or a login form with email and password.
- The form and input components were split to easily add/remove input fields.
- Using styled-components is also easy to adapt the styling according to different parts of the application.
- Using props with specific types enable the inputs configuration. E.g. change the input name or placeholder passsing a string to the Form component.
- A solution for the communication between Form and FormInput was to use ContextApi, so App would not need to be bothered about the onChange.
- An idea to manage the data being changed from different input fields was using a Record in Typescript.
- The tests cover that the App component renders the form and that the form is submitted with the values typed in the input field.

# api

- In order to use the Form component the developer has to provide an onSubmit callback which takes the final submitted value and use the FormInput component as children of the Form.

 # todos

 - Form validation


with :yellow_heart: by [Ingrid do Rio Schulze](https://github.com/ingriddorioschulze)
