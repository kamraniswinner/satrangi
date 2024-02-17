import express from 'express';
const router = express.Router();
import {createOrder,getOrderById,getOrdersByUserId,getOrdersByStatus,updateOrderStatus,updateOrderDetails,cancelOrder,deleteOrder} from '../Controller/orderController.js';

router.post('/orders', createOrder);

// Route to get an order by its ID
router.get('/orders/:id', getOrderById);

// Route to get orders by user ID
router.get('/orders/user/:customerId', getOrdersByUserId);

// Route to get orders by status
router.get('/orders/status/:status', getOrdersByStatus);

// Route to update order status
router.put('/orders/:id/status', updateOrderStatus);

// Route to update order details
router.put('/orders/:id', updateOrderDetails);

// Route to cancel an order
router.put('/orders/:id/cancel', cancelOrder);

// Route to delete an order
router.delete('/orders/:id', deleteOrder);

export default router;
