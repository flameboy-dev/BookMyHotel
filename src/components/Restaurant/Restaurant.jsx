import React, { useState, useMemo } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurants as initialRestaurants } from '../../data/MoreRestaurants';
import './Restaurant.css';

const ITEMS_PER_PAGE = 6;

function Restaurant({ filters, onClearFilters }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRestaurants = useMemo(() => {
    if (!filters) return initialRestaurants;

    return initialRestaurants.filter((restaurant) => {
      // Location filter
      if (filters.location && !restaurant.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      // Rating filter
      if (filters.rating && restaurant.rating < Number(filters.rating)) {
        return false;
      }
      // Cuisine filter
      if (filters.cuisine && !restaurant.description.toLowerCase().includes(filters.cuisine.toLowerCase()) && !restaurant.amenities.some(a => a.toLowerCase().includes(filters.cuisine.toLowerCase()))) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredRestaurants.length / ITEMS_PER_PAGE) || 1;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRestaurants = filteredRestaurants.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="restaurants-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Popular</p>
          <h2 className="section-heading">
            <strong>Popular</strong> Restaurants {filters?.location && `in ${filters.location}`}
          </h2>
        </div>

        {filteredRestaurants.length === 0 ? (
          <div className="no-results-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <i className="fa-solid fa-utensils" style={{ fontSize: '3rem', color: '#f7941d', marginBottom: '1rem' }}></i>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>No Restaurants Found</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>We couldn't find any dining options matching your selected criteria.</p>
            {onClearFilters && (
              <button className="btn btn-primary" onClick={onClearFilters}>
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="restaurants-grid">
              {currentRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  location={restaurant.location}
                  image={restaurant.image}
                  description={restaurant.description}
                  rating={restaurant.rating}
                  amenities={restaurant.amenities}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                <button onClick={() => handleClick(currentPage - 1)} className="page-btn">
                  {'<'}
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(i + 1)}
                    className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button onClick={() => handleClick(currentPage + 1)} className="page-btn">
                  {'>'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Restaurant;