// Importing the main stylesheet for the application
import './App.css';

// Importing necessary dependencies from React and React Router
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing components for different pages
import Home from './Home';
import Create from './Create';
import Update from './Update';

// Importing Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

// The main component for the entire application
function App() {
  return (
    // Using BrowserRouter to enable routing in the application
    <BrowserRouter>
      {/* Defining routes for different pages using the Routes component */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the create page */}
        <Route path="/create" element={<Create />} />

        {/* Route for updating a specific item identified by the 'id' parameter */}
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporting the App component as the default export of this module
export default App;
