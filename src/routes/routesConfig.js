// Route Constants Configuration
export const ROUTES = {
  PUBLIC: {
    HOME: '/',
    ABOUT: '/about',
    HOTELS: '/hotels',
    SINGLE_HOTEL: '/hotels/:id',
    RESTAURANT: '/restaurant',
    CONTACT: '/contact'
  },
  AUTH: {
    LOGIN: '/auth',
    ADMIN_LOGIN: '/admin/login',
    HOTEL_LOGIN: '/hotel/login',
    FORGOT_PASSWORD: '/forgot-password'
  },
  DASHBOARD: {
    USER: '/User',
    HOTEL: '/hotel',
    ADMIN: '/admin'
  }
};

export default ROUTES;
