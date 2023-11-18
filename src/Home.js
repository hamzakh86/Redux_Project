// Importing React and necessary hooks from react-redux and react-router-dom
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Importing the deleteUser action from the UserReducer file
import { deleteUser } from './UserReducer';

// The Home component for displaying the list of users
function Home() {
    // Accessing the 'users' array from the Redux store
    const users = useSelector((state) => state.users);

    // Accessing the dispatch function to dispatch actions to the Redux store
    const dispatch = useDispatch();
    
    // Handling the delete action for a user
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }));
    }

    // Rendering the UI for the Home component
    return (
        <div className='container'>
            <h2>TO DO LIST</h2>
            
            {/* Link to the create page */}
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>

            {/* Table for displaying the list of users */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping through the 'users' array and rendering a table row for each user */}
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {/* Link to the edit page for a specific user */}
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                
                                {/* Button for deleting a user */}
                                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Exporting the Home component as the default export of this module
export default Home;
