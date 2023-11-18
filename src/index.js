// Importing React and ReactDOM for rendering the application
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the Provider component from react-redux to connect React with Redux
import { Provider } from 'react-redux';

// Importing the 'main' store configuration (assumed to be a Redux store) and the main App component
import main from './main';
import App from './App';

// Rendering the React application
ReactDOM.render(
  // Wrapping the entire application with the Provider component to provide access to the Redux store
  <Provider store={main}>
    {/* Rendering the main App component within the Redux provider */}
    <App />
  </Provider>,
  // Specifying the DOM element with the id 'root' where the application will be rendered
  document.getElementById('root')
);
