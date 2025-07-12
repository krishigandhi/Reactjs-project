import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Welcome to Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
