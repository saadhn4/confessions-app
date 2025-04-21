# 📝 Confessions App

A full-stack web application built with **React**, **Node.js**, **Express**, and **MongoDB** where users can anonymously post confessions. It supports user registration with email verification, secure login, and JWT-based authentication.

---

## 🚀 Features

- ✅ User Registration with Email Verification (via Gmail SMTP)
- 🔐 JWT-based User Login & Protected Routes
- ✍️ Create and View Anonymous Confessions
- 🧾 CRUD Operations for Confessions (Admin/Expansion Ready)
- 📦 Persistent User Sessions via Local Storage
- 🧑‍💻 React Frontend + Express API Backend

---

## 🛠️ Tech Stack

**Frontend:**
- React
- React Router DOM
- Tailwind CSS

**Backend:**
- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer (Gmail SMTP)
- Config Package

---

## ⚙️ Configuration

Before starting, create a `default.json` in `config/` with the following structure:

```json
{
  "PORT": 5000,
  "DB_URL": "your-mongodb-url",
  "JWT_SECRET": "your-secret-key",
  "EMAIL": "your-gmail-address",
  "PASS": "your-gmail-app-password",
  "URL": "http://localhost:5000"
}