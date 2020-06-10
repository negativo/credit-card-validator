## Description

Credit Cards number validator.
The project is built in Typescript with ReactJS and Styled Components and it 
uses React-create-app with the typescript template.

It includes a very simple UI with an Input field for the card number, 
a more complete solution should include the CVV code, the expiration date and
the card holder.

The source is divided into modules: 

- a UI kit with the stateless graphic components
- a Utils module with the helper functions to validate the credit card
- a Features module with the CreditCardForm component that tie logic and UI together.

The build folder is ready to be deployed.
You may serve it with a static server:

```
npm install -g serve
serve -s build
```

or 

```
cd build
php -S localhost:3000
```


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Snapshots & Unit testing.
