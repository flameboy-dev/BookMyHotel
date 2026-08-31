import React from 'react';
import RestaurantView from '../views/pages/RestaurantView';
import restaurantModel from '../models/restaurantModel';

export function RestaurantController() {
  const restaurants = restaurantModel.getAllRestaurants();
  return <RestaurantView restaurants={restaurants} />;
}

export default RestaurantController;
