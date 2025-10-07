const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  name: String,
  qty: Number,
  price: Number
});
const orderSchema = new mongoose.Schema({
  type: { type: String, enum: ['table','takeaway','online','bar'], default: 'table' },
  tableNumber: String,
  items: [orderItemSchema],
  total: Number,
  status: { type: String, enum: ['New','Cooking','Ready','Served','Paid'], default: 'New' },
  payment: { method: String, paid: { type: Boolean, default: false }, transactionId: String },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema);
