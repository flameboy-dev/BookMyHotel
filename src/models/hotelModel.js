import { hotels as featuredHotels } from '../data/hotels';
import { hotels as allHotels } from '../data/MoreHotels';

export const hotelModel = {
  getFeaturedHotels: () => {
    return featuredHotels;
  },

  getAllHotels: () => {
    return allHotels;
  },

  getHotelById: (id) => {
    const numericId = Number(id);
    const found = allHotels.find((h) => h.id === numericId) || featuredHotels.find((h) => h.id === numericId);
    return found || null;
  },

  searchAndFilterHotels: ({ location = '', maxPrice = Infinity, guests = 0 } = {}) => {
    return allHotels.filter((hotel) => {
      const matchesLocation = !location || hotel.location.toLowerCase().includes(location.toLowerCase());
      const matchesPrice = hotel.price <= maxPrice;
      const matchesGuests = !guests || hotel.guests >= Number(guests);
      return matchesLocation && matchesPrice && matchesGuests;
    });
  }
};

export default hotelModel;
