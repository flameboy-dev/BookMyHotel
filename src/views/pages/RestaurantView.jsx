import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/Hero/Hero2';
import FilterBar from '../../components/FilterBar/RestaurantFilterBar';
import Footer from '../../components/Footer/Footer';
import RestaurantList from '../../components/Restaurant/Restaurant';

export function RestaurantView() {
  const [filters, setFilters] = useState(null);

  const handleSearch = (searchFilters) => {
    setFilters(searchFilters);
  };

  return (
    <div className="restaurant-page">
      <Navbar />
      <Hero2
        backgroundImage="/Images/bg_10.jpg"
        breadcrumb="Home / Restaurant"
        title="Restaurant"
      />
      <FilterBar onSearch={handleSearch} />
      <RestaurantList filters={filters} onClearFilters={() => setFilters(null)} />
      <Footer />
    </div>
  );
}

export default RestaurantView;
