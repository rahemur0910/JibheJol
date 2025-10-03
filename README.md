# 🍴 Jibhe Jol

A starter **MERN stack** project designed to manage restaurant operations efficiently. It includes separate **Admin** and **Employee** panels, with features for orders, billing, menu management, and reporting.

---

## 🚀 Features

### 🔹 Admin Panel

* **Login & Authentication**
* **Dashboard**

  * Today’s orders summary
  * Revenue overview
* **Menu Management**

  * Add / Edit / Delete menu items
  * Update availability & categories
* **Employee Management**

  * Add new employee accounts
  * Assign roles (Waiter, Kitchen, Cashier, Bar staff)
* **Reports**

  * Daily/weekly/monthly sales reports
  * Export data (CSV/PDF)

### 🔹 Employee Panel

* **Order Type Selector**

  * Table Orders
  * Takeaway Orders
  * Online Orders
* **Orders Queue (Kitchen View)**

  * Track orders with status: *New → Cooking → Ready*
* **Billing (Cashier View)**

  * Generate bills & print receipts
  * Mark orders as Paid (Cash / Card / UPI)
* **Bar Module**

  * Handle bar orders separately
  * Issue bar-specific KOT (Kitchen Order Ticket)

---

## 🛠️ Tech Stack

* **Frontend:** React.js (with TailwindCSS / ShadCN UI)
* **Backend:** Node.js + Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Token)
* **Deployment:** Heroku / Vercel / AWS

---

## 📂 Project Structure

```bash
restaurant-management-system/
│
├── backend/                # Express + MongoDB server
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── server.js           # Main server entry
│
├── frontend/               # React client app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Admin & Employee panels
│   │   └── App.js
│   └── package.json
│
├── README.md
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites

* Node.js (>= 18.x)
* MongoDB (local or Atlas)

### Installation

```bash
# Clone repo
git clone https://github.com/your-username/restaurant-management-system.git
cd restaurant-management-system

# Install dependencies for backend
cd backend
npm install

# Install dependencies for frontend
cd ../frontend
npm install
```

### Run the Project

```bash
# Run backend
cd backend
npm run dev

# Run frontend (in another terminal)
cd frontend
npm start
```

---

## 📸 Wireframe (Prototype)

Admin & Employee panel wireframes (initial design):
👉 Add your **wireframe images/screenshots** here

---

## ✅ Future Enhancements

* Online food delivery integration (Zomato/Swiggy APIs)
* Inventory & stock management
* AI-powered sales prediction
* Role-based notifications

---

## 📜 License

This project is licensed under the MIT License.
