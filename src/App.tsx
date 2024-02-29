import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { AuthProvider } from './authContext';
import Dashboard from './component/Dashboard';
import withAuth from './withAuth';
import SignIn from './component/SignIn';
import Register from './component/Register';

const ProtectedDashboard = withAuth(Dashboard);

const App: React.FC = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  </AuthProvider>
  );
};

export default App;
