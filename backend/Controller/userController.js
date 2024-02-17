import User from '../model/Usermodel.js';
import jwt from 'jsonwebtoken'; // Import JWT for token generation

// Controller function for user registration
export const registerUser = async (req, res) => {
  try {
    // Extract user input from the request body
    const { username, email, password, firstName, lastName } = req.body;
    console.log(req.body)

    // Check if the username or email is already taken
    /* const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email is already taken' });
    } */


    // Create a new user instance with hashed password
    const user = new User({
      username,
      email,
      password,
      /* createdAt: new Date(),
      updatedAt: new Date(), */
      firstName,
      lastName,
      /* roles: 'user',// Assign default role
      isActive: true // New user is active by default */
    });

    // Save the new user to the database
    console.log(user);
    await user.save();

    // Respond with success message and user data
    res.status(201).json({ message: 'User registered successfully', user })
  } catch (error) {
    // Handle errors
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const loginUser = async (req, res) => {
    try {
      // Extract user input from the request body
      const { email, password } = req.body;
  
      // Find the user in the database by username
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
    
      // Compare the provided password with the password in the database
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid email or password' });
      } 
  
      // User credentials are valid, generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      // Respond with success message and JWT token
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      // Handle errors
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  export const updateUserByAdmin = async (req, res) => {
    try {
      // Extract user input from the request body
      const { userId } = req.params; // User ID to be updated
      const { username, email, password, firstName, lastName } = req.body;
  
      // Check if the requesting user is an admin
      if (!req.user || req.user.roles.indexOf('admin') === -1) {
        return res.status(403).json({ error: 'Unauthorized access' });
      }
  
      // Find the user in the database by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update user data
      user.username = username || user.username;
      user.email = email || user.email;
      user.firstName = firstName || user.profile.firstName;
      user.lastName = lastName || user.profile.lastName;
      user.password = password || user.password;
  
      // Save the updated user to the database
      await user.save();
  
      // Respond with success message and updated user data
      res.status(200).json({ message: 'User data updated successfully', user });
    } catch (error) {
      // Handle errors
      console.error('Error updating user data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

  export const deleteUserAccount = async (req, res) => {
    try {
      // Extract user ID from request parameters
      const { userId } = req.params;
  
      // Check if the requesting user is an admin or the user to be deleted
      if (!req.user || (req.user._id !== userId && req.user.roles.indexOf('admin') === -1)) {
        return res.status(403).json({ error: 'Unauthorized access' });
      }
  
      // Find the user in the database by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Delete the user from the database
      await user.remove();
  
      // Respond with success message
      res.status(200).json({ message: 'User account deleted successfully' });
    } catch (error) {
      // Handle errors
      console.error('Error deleting user account:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export const getAllUsers = async (req, res) => {
    try {
      // Retrieve all users from the database
      const users = await User.find();
  
      // Respond with the list of users
      res.status(200).json(users);
    } catch (error) {
      // Handle errors
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  export const getUserById = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find the user by ID in the database
      const user = await User.findById(userId);
  
      // If user is not found, return 404 Not Found
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Respond with the user data
      res.status(200).json(user);
    } catch (error) {
      // Handle errors
      console.error('Error getting user by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  