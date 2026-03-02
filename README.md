# Frontend Authentication System

A complete authentication frontend application built with React, Vite, and React Router. The system includes Register, Login, and Dashboard pages with secure routing and state management.

## Features

✅ **Register Page** - Create a new account with email and password
✅ **Login Page** - Log in with existing credentials
✅ **Dashboard Page** - Access protected content when logged in
✅ **Protected Routes** - Dashboard is only accessible to authenticated users
✅ **Public Routes** - Register/Login pages redirect to dashboard if already logged in
✅ **Automatic Redirects** - Unregistered users are redirected to register page
✅ **Persistent Authentication** - User session persists on page refresh
✅ **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
src/
├── context/
│   └── AuthContext.jsx          # Authentication state management
├── pages/
│   ├── Register.jsx              # Register page component
│   ├── Login.jsx                 # Login page component
│   ├── Dashboard.jsx             # Dashboard page component
│   ├── AuthPages.css             # Styles for auth pages
│   └── Dashboard.css             # Styles for dashboard
├── components/
│   ├── ProtectedRoute.jsx        # Route guard for protected pages
│   └── PublicRoute.jsx           # Route guard for public pages
├── App.jsx                       # Main app with routing
├── App.css                       # Global app styles
└── main.jsx
```

## Authentication Flow

### Flow Diagram

```
1. User visits app (http://localhost:5173/)
   ↓
2. Check if user is authenticated
   ├─ YES → Redirect to /dashboard (Dashboard page)
   └─ NO → Redirect to /register (Register page)

3. Registration Flow:
   Register Page → [Create Account] → Login Page

4. Login Flow:
   Login Page → [Log In] → Dashboard Page

5. From Dashboard:
   [Logout Button] → Back to Register Page
```

## How to Use

### 1. **Installation**
```bash
npm install
```

### 2. **Start Development Server**
```bash
npm run dev
```
The app will open at `http://localhost:5173/`

### 3. **Register a New Account**
- Navigate to the Register page (default page)
- Enter your full name, email, and password
- Click "Register" button
- You'll be redirected to the Login page

### 4. **Login**
- On the Login page, enter your registered email and password
- Click "Login" button
- If credentials are correct, you'll be redirected to the Dashboard

### 5. **Access Dashboard**
- The Dashboard page shows:
  - Welcome message with your name
  - Your user information (Name, Email, User ID)
  - Logout button to end your session

### 6. **Logout**
- Click the "Logout" button on the Dashboard
- Your session will be ended and you'll be redirected to the Register page

## Data Storage

The authentication system uses **localStorage** to store:
- **users**: Array of all registered users (email, password, name)
- **user**: Current logged-in user information

**Note:** This is a frontend-only demo. In production, use a backend API with secure password hashing and authentication tokens.

## Validation Rules

### Registration
- ✓ All fields are required
- ✓ Password must be at least 6 characters
- ✓ Passwords must match
- ✓ Email must be unique (no duplicate accounts)

### Login
- ✓ Email and password are required
- ✓ Credentials must match stored user data

## Built With

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **CSS3** - Styling with gradients and animations

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Routing Structure

| Route | Access | Redirects To |
|-------|--------|--------------|
| `/register` | Unauthenticated users | `/dashboard` if logged in |
| `/login` | Unauthenticated users | `/dashboard` if logged in |
| `/dashboard` | Authenticated users only | `/register` if not logged in |
| `/` | All users | `/register` (default) |
| `/*` | All users | `/register` (404 catch-all) |

## Test Credentials

After registering an account, you can use those credentials to test the login functionality.

Example:
- **Name:** John Doe
- **Email:** john@example.com
- **Password:** password123

## Key Features Explained

### AuthContext
Manages global authentication state including:
- User data
- Login/Register functions
- Logout functionality
- Loading states

### Protected Routes
- Checks if user is authenticated
- Redirects to register page if not authenticated
- Shows loading state while checking authentication

### Public Routes
- Checks if user is authenticated
- Redirects to dashboard if already logged in
- Prevents authenticated users from accessing register/login pages

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Notes

⚠️ **Important:** This is a frontend demonstration. For production use:
1. Use a backend API for authentication
2. Implement secure password hashing (bcrypt, argon2)
3. Use JWT or session tokens
4. Store sensitive data securely on the server
5. Implement CSRF protection
6. Use HTTPS for all communications

## Future Enhancements

- [ ] Forgot password functionality
- [ ] Email verification
- [ ] Social login (Google, GitHub, etc.)
- [ ] Profile editing
- [ ] User roles and permissions
- [ ] 2-factor authentication

## Troubleshooting

**Issue:** App redirects to register page after login
- **Solution:** Check localStorage in browser DevTools. Clear cache and refresh.

**Issue:** Styles not loading correctly
- **Solution:** Make sure all CSS files are imported correctly. Stop and restart the dev server.

**Issue:** "useAuth must be used within AuthProvider" error
- **Solution:** Wrap your components with `<AuthProvider>` in App.jsx

---

Happy coding! 🚀
