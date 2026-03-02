import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/register');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="btn btn-logout">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h2>Welcome, {user?.name}!</h2>
          <p>You are now logged in to your account.</p>
        </div>

        <div className="user-info">
          <h3>Your Information</h3>
          <div className="info-item">
            <label>Name:</label>
            <span>{user?.name}</span>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <span>{user?.email}</span>
          </div>
          <div className="info-item">
            <label>User ID:</label>
            <span>{user?.id}</span>
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Features</h3>
          <p>You can add more features and functionality here for your dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
