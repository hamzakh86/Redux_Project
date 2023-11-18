// Importing createSlice function from @reduxjs/toolkit
import { createSlice } from "@reduxjs/toolkit";

// Importing the static user data from the Data file
import { userList } from "./Data";

// Creating a Redux slice for managing user data
const userSlice = createSlice({
    // Name of the slice
    name: "users",

    // Initial state set to the static user list
    initialState: userList,

    // Reducers for handling actions related to user data
    reducers: {
        // Reducer for adding a new user to the state
        addUser: (state, action) => {
            state.push(action.payload);
        },

        // Reducer for updating an existing user in the state
        updateUser: (state, action) => {
            // Destructuring action payload to get id, name, and email
            const { id, name, email } = action.payload;

            // Finding the user in the state based on the id
            const updatedUser = state.find(user => user.id === id);

            // Updating user properties if the user is found
            if (updatedUser) {
                updatedUser.name = name;
                updatedUser.email = email;
            }
        },

        // Reducer for deleting a user from the state
        deleteUser: (state, action) => {
            // Destructuring action payload to get the id
            const { id } = action.payload;

            // Finding the user in the state based on the id
            const userToDelete = state.find(user => user.id === id);

            // Filtering out the user if found
            if (userToDelete) {
                return state.filter(user => user.id !== id);
            }
        }
    }
});

// Extracting action creators and reducer from the slice
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
