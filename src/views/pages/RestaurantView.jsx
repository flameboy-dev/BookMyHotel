import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/Hero/Hero2';
import FilterBar from '../../components/FilterBar/RestaurantFilterBar';
import RestaurantList from '../../components/Restaurant/Restaurant';
import RestaurantFeatures from '../../components/Restaurant/RestaurantFeatures';
import Footer from '../../components/Footer/Footer';

export function RestaurantView() {
  const [filters, setFilters] = useState(null);

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  return (
    <div className="restaurant-page" style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Navbar />
      <Hero2
        backgroundImage="/Images/bg_10.jpg"
        breadcrumb="Home / Restaurant"
        title="Fine Dining &amp; Restaurants"
      />
      <FilterBar onSearch={handleSearch} />
      <RestaurantList filters={filters} onClearFilters={() => setFilters(null)} />
      <RestaurantFeatures />
      <Footer />
    </div>
  );
}

export default RestaurantView;
