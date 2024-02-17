import express from 'express';
const router = express.Router();
import { addToCart, removeFromCart } from '../Controller/cartController.js';

// Route to add a product to the cart
router.post('/cart/add', addToCart);

// Route to remove a product from the cart
router.post('/cart/remove', removeFromCart);

export default router;
