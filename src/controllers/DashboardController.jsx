import React from 'react';
import UserDashboardView from '../views/pages/UserDashboardView';
import HotelDashboardView from '../views/pages/HotelDashboardView';
import AdminDashboardView from '../views/pages/AdminDashboardView';

export function UserDashboardController() {
  return <UserDashboardView />;
}

export function HotelDashboardController() {
  return <HotelDashboardView />;
}

export function AdminDashboardController() {
  return <AdminDashboardView />;
}

export default {
  UserDashboardController,
  HotelDashboardController,
  AdminDashboardController
};
