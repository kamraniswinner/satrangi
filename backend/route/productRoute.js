import express from 'express';
const router = express.Router();
import { createProduct, getAllProducts,updateProduct,deleteProduct } from '../Controller/productController.js';
/* import { createProduct, getAllProducts } from '../Controller/productController'; */
// Route to create a new product
router.post('/products', createProduct);

// Route to fetch all products
router.get('/products', getAllProducts);

router.put('/products/:id', updateProduct);

router.delete('/products/:id', deleteProduct);

export default router;