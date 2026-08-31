import React, { useState } from 'react';
import UserNavbar from '../../components/Navbar2/UserNavbar';
import UserSidebar from '../../components/Sidebar/UserSidebar';
import UserOverview from '../../components/UserDashboard/UserProfile';
import MyBookings from '../../components/Booking/MyBookings';
import FoodOrders from '../../components/Food/FoodOrders';
import UserCheckinCheckout from '../../components/CheckInOut/UserCheckinCheckout';
import AccountSettings from '../../components/Settings/AccountSettings';
import '../../pages/UserDashboard.css';

export function UserDashboardView() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('overview');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'overview':
        return <UserOverview />;
      case 'bookings':
        return <MyBookings />;
      case 'food':
        return <FoodOrders />;
      case 'checkincheckout':
        return <UserCheckinCheckout />;
      case 'settings':
        return <AccountSettings />;
      default:
        return <UserOverview />;
    }
  };

  return (
    <div className="user-dashboard">
      <UserNavbar toggleSidebar={toggleSidebar} />
      <UserSidebar setCurrentSection={setCurrentSection} isSidebarOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default UserDashboardView;
