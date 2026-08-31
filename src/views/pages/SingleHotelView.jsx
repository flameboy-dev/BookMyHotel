import React from 'react';
import Hero2 from '../../components/Hero/Hero2';
import Navbar from '../../components/Navbar/Navbar';
import Single from '../../components/Hotels/SingleHotel';
import Footer from '../../components/Footer/Footer';

export function SingleHotelView({ hotel }) {
  return (
    <>
      <Navbar />
      <Hero2
        backgroundImage="/Images/bg_7.jpg"
        breadcrumb="Home / Hotels / Single Hotel"
        title={hotel ? hotel.name : "Hotel Details"}
      />
      <main className="singlehotel-page">
        <Single hotel={hotel} />
      </main>
      <Footer />
    </>
  );
}

export default SingleHotelView;
