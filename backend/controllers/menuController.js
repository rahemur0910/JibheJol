const MenuItem = require('../models/MenuItem');

exports.createItem = async (req, res) => {
  const { name, description, price, category, available, isBarItem } = req.body;
  const item = await MenuItem.create({ name, description, price, category, available, isBarItem });
  res.json(item);
};

exports.getAll = async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
};

exports.updateItem = async (req, res) => {
  const id = req.params.id;
  const updated = await MenuItem.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
