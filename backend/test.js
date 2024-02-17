export const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, images } = req.body;
        
        // Create an array to store the formatted image data
        const formattedImages = images.map(image => ({
            url: image.url,
            caption: image.caption || '' // Default caption to an empty string if not provided
        }));

        const product = new Product({
            name,
            description,
            price,
            category,
            images: formattedImages // Assign formatted image data to the product
        });
        
        await product.save();
        
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

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
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName,
        lastName,
        roles: 'user',// Assign default role
        isActive: true // New user is active by default
      });
  
      // Save the new user to the database
      console.log(user);
      await user.save();
  
      // Respond with success message and user data
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
      // Handle errors
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  