import { Schema, model, Types } from 'mongoose';

const { ObjectId } = Types;

const orderSchema = new Schema({
  _id: ObjectId,
  orderNumber: String,
  customer: {
    customerId: ObjectId,
    name: String,
    email: String,
    address: String,
    // Other customer details
  },
  items: [
    {
      productId: ObjectId,
      name: String,
      price: Number,
      quantity: Number,
      // Other product details
    }
  ],
  totalAmount: Number,
  status: String,
  // Other order details like shipping information, timestamps, etc.
});

// Create a model using the product schema
const Ordermodel = model('Order', orderSchema);

export default Ordermodel;
