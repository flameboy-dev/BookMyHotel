import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLogin from '../../components/Auth/AdminLogin';

export function AdminLoginView() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/admin');
  };

  return (
    <div className="adminlogin-page">
      <AdminLogin onLoginSuccess={handleLoginSuccess} />
    </div>
  );
}

export default AdminLoginView;
