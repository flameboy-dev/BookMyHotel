import React from 'react';
import { useParams } from 'react-router-dom';
import HotelsView from '../views/pages/HotelsView';
import SingleHotelView from '../views/pages/SingleHotelView';
import hotelModel from '../models/hotelModel';

export function HotelsController() {
  const hotels = hotelModel.getAllHotels();
  return <HotelsView hotels={hotels} />;
}

export function SingleHotelController() {
  const { id } = useParams();
  const hotel = hotelModel.getHotelById(id);
  return <SingleHotelView hotel={hotel} />;
}

export default {
  HotelsController,
  SingleHotelController
};
