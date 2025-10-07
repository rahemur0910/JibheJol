const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  available: { type: Boolean, default: true },
  isBarItem: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('MenuItem', menuSchema);
