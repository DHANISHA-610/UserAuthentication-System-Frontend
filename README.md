# Authentication Frontend

Simple React/Vite app with register, login, and a protected dashboard.

## Quick Start

```bash
npm install
npm run dev      # open http://localhost:5173
```

## Features

- Register and login using localStorage
- Dashboard accessible only after login
- Redirects ensure proper flow between pages
- Basic validation and responsive styling

## File Layout

```
src/
├── context/AuthContext.jsx      # auth state + helpers
├── pages/                       # Register, Login, Dashboard
├── components/                  # ProtectedRoute, PublicRoute
├── App.jsx                      # routing + providers
├── App.css, index.css           # global styles
└── main.jsx
```

## Notes

Data is stored in localStorage under `users` and `user`. This is a demo; use a backend for real apps.

---

Enjoy! Feel free to expand with features like password reset or backend integration.