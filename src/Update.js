// Importing React and necessary hooks from react-redux and react-router-dom
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Importing the updateUser action from the UserReducer file
import { updateUser } from './UserReducer';

// The Update component for updating an existing user
function Update() {
  // Extracting the 'id' parameter from the URL using useParams hook
  const { id } = useParams();

  // Accessing the 'users' array from the Redux store
  const users = useSelector((state) => state.users);

  // Finding the existing user with the specified 'id'
  const existingUser = users.find((user) => user.id === parseInt(id));

  // Destructuring the existing user's properties or providing empty values if the user is not found
  const { name: initialName, email: initialEmail } = existingUser || {};

  // State variables to manage form input values
  const [uname, setName] = useState(initialName || '');
  const [uemail, setEmail] = useState(initialEmail || '');

  // Accessing the dispatch function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Accessing the navigate function to handle page navigation
  const navigate = useNavigate();

  // Handling the update action for the user
  const handleUpdate = (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();

    // Dispatching the updateUser action with the updated user data
    dispatch(updateUser({
      id: parseInt(id),
      name: uname,
      email: uemail,
    }));

    // Navigating back to the home page after successful update
    navigate('/');
  };

  // Rendering the UI for updating an existing user
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          {/* Input field for entering the updated user's name */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name='name'
              className='form-control'
              placeholder='enter name'
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* Input field for entering the updated user's email */}
          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="text"
              name='email'
              className='form-control'
              placeholder='enter email'
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div><br />
          {/* Button for submitting the form and updating the user */}
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  );
}

// Exporting the Update component as the default export of this module
export default Update;
