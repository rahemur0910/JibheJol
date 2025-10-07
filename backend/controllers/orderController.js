const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');

exports.createOrder = async (req, res) => {
  const { type, tableNumber, items } = req.body;
  // items: [{ menuItemId, qty }]
  const populated = await Promise.all(items.map(async it => {
    const menu = await MenuItem.findById(it.menuItemId);
    return { menuItem: menu._id, name: menu.name, qty: it.qty, price: menu.price };
  }));
  const total = populated.reduce((s, it) => s + it.qty * it.price, 0);
  const order = await Order.create({ type, tableNumber, items: populated, total });
  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  res.json(order);
};

exports.markPaid = async (req, res) => {
  const { id } = req.params;
  const { method, transactionId } = req.body;
  const order = await Order.findByIdAndUpdate(id, { payment: { method, transactionId, paid: true }, status: 'Paid' }, { new: true });
  res.json(order);
};
