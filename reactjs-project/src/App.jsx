import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { isLoggedIn } from './utils/auth';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard"
        element={isLoggedIn() ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
