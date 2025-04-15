import Order from '../models/Order.js';

export const createOrder = async (req, res) => {
  const newOrder = new Order({ ...req.body, user: req.user._id });
  const saved = await newOrder.save();
  res.status(201).json(saved);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('orderItems.product');
  res.json(orders);
};
