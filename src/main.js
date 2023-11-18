// Importing the configureStore function from the @reduxjs/toolkit library
import { configureStore } from '@reduxjs/toolkit';

// Importing React and ReactDOM for rendering the application
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the Provider component from react-redux to connect React with Redux
import { Provider } from 'react-redux';

// Importing the main App component of the application
import App from './App';

// Importing the UserReducer to be used as a reducer in the Redux store
import UserReducer from './UserReducer';

// Creating the Redux store with the configureStore function
const store = configureStore({
  reducer: {
    // Specifying the 'users' slice of the state and associating it with the UserReducer
    users: UserReducer,
  },
});

// Using ReactDOM.createRoot to create a root for rendering React elements and rendering the App component within it
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the entire application with React.StrictMode for additional development-related checks
  <React.StrictMode>
    {/* Providing the Redux store to the entire application using the Provider component */}
    <Provider store={store}>
      {/* Rendering the main App component */}
      <App />
    </Provider>
  </React.StrictMode>
);

// Exporting the configured Redux store as the default export of this module
export default store;
