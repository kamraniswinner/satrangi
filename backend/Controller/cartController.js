import Cart from '../model/Cartmodel.js';

export const addToCart = async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
  
      // Check if the user already has a cart
      let cart = await Cart.findOne({ user: userId });
  
      // If the user doesn't have a cart, create a new one
      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
      }
  
      // Check if the product is already in the cart
      const existingItem = cart.items.find(item => item.productId === productId);
  
      // If the product is already in the cart, update the quantity
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        // Otherwise, add the product as a new item
        cart.items.push({ productId, quantity });
      }
  
      // Save the updated cart to the database
      const updatedCart = await cart.save();
  
      res.status(201).json(updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  export const removeFromCart = async (req, res) => {
    try {
      const { userId, productId } = req.body;
  
      // Find the user's cart
      let cart = await Cart.findOne({ user: userId });
  
      // If the cart doesn't exist, return an error
      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }
  
      // Find the index of the item to remove
      const itemIndex = cart.items.findIndex(item => item.productId === productId);
  
      // If the item is not found in the cart, return an error
      if (itemIndex === -1) {
        return res.status(404).json({ message: "Item not found in the cart" });
      }
  
      // Remove the item from the cart
      cart.items.splice(itemIndex, 1);
  
      // Save the updated cart to the database
      const updatedCart = await cart.save();
  
      res.json(updatedCart);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  