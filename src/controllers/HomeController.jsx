import React from 'react';
import HomeView from '../views/pages/HomeView';
import hotelModel from '../models/hotelModel';

export function HomeController() {
  const featuredHotels = hotelModel.getFeaturedHotels();
  return <HomeView featuredHotels={featuredHotels} />;
}

export default HomeController;
