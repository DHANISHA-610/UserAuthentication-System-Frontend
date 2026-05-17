# 🔐 React Authentication App

A modern authentication system built using **React + Vite** featuring user registration, login functionality, protected routes, and persistent authentication using `localStorage`.

---

## 🚀 Getting Started

Clone the project and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:5173
```

---

## ✨ Features

- 📝 User Registration
- 🔑 User Login Authentication
- 🛡️ Protected Dashboard Route
- 🔄 Auto Redirect Based on Auth State
- 💾 Data Persistence using localStorage
- 📱 Responsive User Interface
- ✅ Form Validation Support

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Register.jsx
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## ⚙️ Authentication Flow

1. User creates an account using the Register page.
2. User credentials are stored in `localStorage`.
3. Login validates the stored credentials.
4. After successful login, users can access the protected Dashboard.
5. Unauthorized users are automatically redirected to the Login page.

---

## 💡 Technologies Used

- ⚛️ React
- ⚡ Vite
- 🌐 React Router DOM
- 🎨 CSS3
- 💾 localStorage API

---

## 📌 Storage Details

The application stores authentication data in:

```bash
users  -> Registered users list
user   -> Currently logged-in user
```

> Note: This project is intended for learning/demo purposes only.  
> For production applications, use a secure backend and database with proper authentication mechanisms.

---

## 🔮 Future Enhancements

- Password Reset Feature
- JWT Authentication
- Backend Integration
- Email Verification
- User Profile Management
- Dark Mode Support

---
