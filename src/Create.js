// Importing React and necessary hooks from react-redux and react-router-dom
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Importing the addUser action from the UserReducer file
import { addUser } from './UserReducer';

// The Create component for adding a new user
function Create() {
  // State variables to manage form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Accessing the 'users' array from the Redux store
  const users = useSelector((state) => state.users);

  // Accessing the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Accessing the navigate function to handle page navigation
  const navigate = useNavigate();

  // Handling form submission
  const handleSubmit = (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Generating a new ID for the user based on the existing users
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    // Dispatching the addUser action with the new user data
    dispatch(addUser({ id: newId, name, email }));

    // Navigating back to the home page after successful submission
    navigate('/');
  };

  // Rendering the UI for adding a new user
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          {/* Input field for entering the user's name */}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='enter name' onChange={(e) => setName(e.target.value)} />
          </div>
          {/* Input field for entering the user's email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name='email' className='form-control' placeholder='enter email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <br />
          {/* Submit button for submitting the form */}
          <button type='submit' className='btn btn-info'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// Exporting the Create component as the default export of this module
export default Create;
