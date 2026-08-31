import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routesConfig';

// Controllers
import HomeController from '../controllers/HomeController';
import { HotelsController, SingleHotelController } from '../controllers/HotelController';
import RestaurantController from '../controllers/RestaurantController';
import { AboutController, ContactController } from '../controllers/PageController';
import {
  UserAuthController,
  AdminLoginController,
  HotelLoginController,
  ForgotPasswordController
} from '../controllers/AuthController';
import {
  UserDashboardController,
  HotelDashboardController,
  AdminDashboardController
} from '../controllers/DashboardController';

export function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.PUBLIC.HOME} element={<HomeController />} />
      <Route path={ROUTES.PUBLIC.ABOUT} element={<AboutController />} />
      <Route path={ROUTES.PUBLIC.HOTELS} element={<HotelsController />} />
      <Route path={ROUTES.PUBLIC.SINGLE_HOTEL} element={<SingleHotelController />} />
      <Route path={ROUTES.PUBLIC.RESTAURANT} element={<RestaurantController />} />
      <Route path={ROUTES.PUBLIC.CONTACT} element={<ContactController />} />

      {/* Authentication Routes */}
      <Route path={ROUTES.AUTH.LOGIN} element={<UserAuthController />} />
      <Route path={ROUTES.AUTH.ADMIN_LOGIN} element={<AdminLoginController />} />
      <Route path={ROUTES.AUTH.HOTEL_LOGIN} element={<HotelLoginController />} />
      <Route path={ROUTES.AUTH.FORGOT_PASSWORD} element={<ForgotPasswordController />} />

      {/* Dashboard Routes */}
      <Route path={ROUTES.DASHBOARD.USER} element={<UserDashboardController />} />
      <Route path={ROUTES.DASHBOARD.HOTEL} element={<HotelDashboardController />} />
      <Route path={ROUTES.DASHBOARD.ADMIN} element={<AdminDashboardController />} />
    </Routes>
  );
}

export default AppRoutes;
