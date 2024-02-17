import Order from '../model/Ordermodel.js';

export const createOrder = async (req, res) => {
    try {
      // Assuming the request body contains the necessary order details
      const { user, items, totalAmount, status } = req.body;
  
      // Create a new order document
      const newOrder = new Order({
        user,
        items,
        totalAmount,
        status
      });
  
      // Save the new order to the database
      const savedOrder = await newOrder.save();
  
      res.status(201).json(savedOrder);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: 'User registered successfully', savedOrder });
    }
  };

  export const getOrderById = async (req, res) => {
    try {
      const orderId = req.params.id;
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (error) {
      console.error("Error getting order by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Controller function to get orders by customer ID
  export const getOrdersByUserId = async (req, res) => {
    try {
      const customerId = req.params.customerId;
      const orders = await Order.find({ "customer.customerId": customerId });
      res.json(orders);
    } catch (error) {
      console.error("Error getting orders by customer ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Controller function to get orders by status
  export const getOrdersByStatus = async (req, res) => {
    try {
      const status = req.params.status;
      const orders = await Order.find({ status: status });
      res.json(orders);
    } catch (error) {
      console.error("Error getting orders by status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Controller function to update order status
  export const updateOrderStatus = async (req, res) => {
    try {
      const orderId = req.params.id;
      const { status } = req.body;
      const updatedOrder = await Order.findByIdAndUpdate(orderId, { status: status }, { new: true });
      res.json(updatedOrder);
    } catch (error) {
      console.error("Error updating order status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Controller function to update order details
  export const updateOrderDetails = async (req, res) => {
    try {
      const orderId = req.params.id;
      const updatedData = req.body;
      const updatedOrder = await Order.findByIdAndUpdate(orderId, updatedData, { new: true });
      res.json(updatedOrder);
    } catch (error) {
      console.error("Error updating order details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Controller function to cancel an order
  export const cancelOrder = async (req, res) => {
    try {
      const orderId = req.params.id;
      const canceledOrder = await Order.findByIdAndUpdate(orderId, { status: "canceled" }, { new: true });
      res.json(canceledOrder);
    } catch (error) {
      console.error("Error canceling order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  // Controller function to delete an order
  export const deleteOrder = async (req, res) => {
    try {
      const orderId = req.params.id;
      await Order.findByIdAndDelete(orderId);
      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      console.error("Error deleting order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  