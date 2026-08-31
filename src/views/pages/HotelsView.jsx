import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/Hero/Hero2';
import FilterBar from '../../components/FilterBar/FilterBar';
import MoreHotel from '../../components/Hotels/MoreHotel';
import Features from '../../components/Features/Features';
import TestimonySection from '../../components/Testimony/TestimonySection';
import Footer from '../../components/Footer/Footer';

export function HotelsView() {
  const routerLocation = useLocation();

  const [filters, setFilters] = useState(() => {
    if (routerLocation.state) {
      return {
        destination: routerLocation.state.destination || '',
        keyword: routerLocation.state.keyword || '',
        priceMin: 500,
        rating: ''
      };
    }
    return null;
  });

  useEffect(() => {
    if (routerLocation.state) {
      setFilters((prev) => ({
        ...prev,
        destination: routerLocation.state.destination || '',
        keyword: routerLocation.state.keyword || ''
      }));
    }
  }, [routerLocation.state]);

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  return (
    <div className="hotels-page" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Hero2
        backgroundImage="/Images/bg_7.jpg"
        breadcrumb="Home / Hotels"
        title="Hotels"
      />
      <FilterBar onSearch={handleSearch} initialFilters={filters} />
      <MoreHotel filters={filters} onClearFilters={() => setFilters(null)} />
      <Footer />
    </div>
  );
}

export default HotelsView;
