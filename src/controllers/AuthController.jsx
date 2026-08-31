import React from 'react';
import AuthView from '../views/pages/AuthView';
import AdminLoginView from '../views/pages/AdminLoginView';
import HotelLoginView from '../views/pages/HotelLoginView';
import ForgotPasswordView from '../views/pages/ForgotPasswordView';

export function UserAuthController() {
  return <AuthView />;
}

export function AdminLoginController() {
  return <AdminLoginView />;
}

export function HotelLoginController() {
  return <HotelLoginView />;
}

export function ForgotPasswordController() {
  return <ForgotPasswordView />;
}

export default {
  UserAuthController,
  AdminLoginController,
  HotelLoginController,
  ForgotPasswordController
};
