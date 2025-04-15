import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderItems: [
    {
      name: String,
      qty: Number,
      image: String,
      price: Number,
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    }
  ],
  shippingAddress: {
    address: String,
    city: String,
    postalCode: String,
    country: String
  },
  paymentMethod: String,
  totalPrice: Number,
  isPaid: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
