import express from 'express';
const router = express.Router();
import { registerUser, loginUser,updateUserByAdmin,deleteUserAccount,getAllUsers,getUserById } from '../Controller/userController.js';


// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route for admin to update user data
router.put('/users/:userId', updateUserByAdmin);

// Route for user (including admin) to delete their account
router.delete('/users/:userId', deleteUserAccount);

router.get('/users', getAllUsers);

router.get('/users/:userId', getUserById);


export default router;
