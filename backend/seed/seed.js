require('dotenv').config();
const mongoose = require('mongoose');
const MenuItem = require('../models/MenuItem');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const items = [
  { name: 'Cheesy Burger', description: 'Beef patty with cheese', price: 200, category: 'Main', isBarItem:false },
  { name: 'French Fries', description: 'Crispy fries', price:80, category: 'Sides', isBarItem:false },
  { name: 'Mojito', description: 'Refreshing mint', price:150, category:'Drinks', isBarItem:true }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await MenuItem.deleteMany({});
  await MenuItem.insertMany(items);
  await User.deleteMany({});
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash('password123', salt);
  await User.create({ name: 'Admin', email: 'admin@example.com', passwordHash, role: 'admin' });
  console.log('Seed done');
  process.exit();
}
seed();

git config --global user.name "rahemur0910"
git config --global user.email "rahemur1111rup.katha@gmail.com"
