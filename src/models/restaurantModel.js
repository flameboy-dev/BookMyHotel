import { restaurants } from '../data/MoreRestaurants';

export const restaurantModel = {
  getAllRestaurants: () => {
    return restaurants;
  },

  getRestaurantById: (id) => {
    const numericId = Number(id);
    return restaurants.find((r) => r.id === numericId) || null;
  }
};

export default restaurantModel;
