import mongoose, { Schema as _Schema, model } from 'mongoose';

const { Schema } = mongoose;

const cartItemSchema = new Schema({
  productId: {
    type: _Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  // You can add more fields if needed, like price, name, etc.
});

const cartSchema = new Schema({
  user: {
    type: _Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [cartItemSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Cart = model('Cart', cartSchema);

export default Cart;
