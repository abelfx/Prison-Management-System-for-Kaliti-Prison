# 🏛️ 4 Kilo Prison Management System

A modern and secure web-based prison management system built using the MERN stack (MongoDB, Express.js, React, Node.js). This platform helps streamline prison operations — from inmate tracking to staff management — while ensuring data security and administrative efficiency.

---

## 🔗 Live Demo

🚫 *This project is not hosted publicly due to security concerns.*

---

## 📸 Screenshots

> 📷 *Screenshots will be shown here once uploaded to the `assets/` folder in the repo.*

| Dashboard | Inmate Profile | Staff Management |
|----------|----------------|------------------|
| ![Dashboard](./assets/dashboard.png) | ![Inmate Profile](./assets/inmate-profile.png) | ![Staff](./assets/staff.png) |

---

## 🧰 Tech Stack

**Frontend:**
- React
- React Router DOM
- Axios
- Tailwind CSS / Bootstrap

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Other Tools:**
- JWT for Authentication
- bcrypt for Password Hashing
- Cloudinary for Image Uploads
- Dotenv for Environment Management

---

## 🎯 Key Features

### 👮 Admin Dashboard
- Role-based access control (admin only)
- Secure login/logout with token-based authentication
- View system metrics and quick actions

### 🧑‍🤝‍🧑 Inmate Management
- Register, update, and delete inmate records
- Sentence details, release tracking, and personal profiles
- Upload profile images (stored in Cloudinary)

### 👨‍💼 Staff Management
- Create and manage staff accounts
- Assign roles and monitor activities
- Attendance logging (future feature)

### 🛡️ Security
- Backend-protected routes via JWT
- Passwords hashed with bcrypt
- Access controls on sensitive routes

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/4kilo-prison-system.git
cd 4kilo-prison-system
```

### 2. Install dependencies
```bash

bash
Copy
Edit
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```
### 3, Setup your env

### 4. Start the development servers
```bash
# In one terminal (backend)
cd server
npm run dev

# In another terminal (frontend)
cd client
npm start
```
