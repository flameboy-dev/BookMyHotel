import React, { useState, useMemo } from 'react';
import HotelCard from './HotelCard';
import { hotels as initialHotels } from '../../data/MoreHotels';
import './Hotels.css';

const ITEMS_PER_PAGE = 6;

function MoreHotel({ filters, onClearFilters }) {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredHotels = useMemo(() => {
    if (!filters) return initialHotels;

    return initialHotels.filter((hotel) => {
      // 1. Keyword search (name, location, description, or amenities)
      if (filters.keyword && filters.keyword.trim() !== '') {
        const kw = filters.keyword.toLowerCase().trim();
        const inName = hotel.name.toLowerCase().includes(kw);
        const inLoc = hotel.location.toLowerCase().includes(kw);
        const inDesc = hotel.description.toLowerCase().includes(kw);
        const inAmenities = hotel.amenities?.some(a => a.toLowerCase().includes(kw));
        if (!inName && !inLoc && !inDesc && !inAmenities) {
          return false;
        }
      }
      // 2. Destination filter
      if (filters.destination && !hotel.location.toLowerCase().includes(filters.destination.toLowerCase())) {
        return false;
      }
      // 3. Rating filter
      if (filters.rating && Number(hotel.rating) < Number(filters.rating)) {
        return false;
      }
      // 4. Price filter
      const hotelMinPrice = typeof hotel.price === 'object'
        ? Math.min(...Object.values(hotel.price))
        : (Number(hotel.price) || 0);

      if (filters.priceMin && Number(filters.priceMin) > 500 && hotelMinPrice > Number(filters.priceMin)) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredHotels.length / ITEMS_PER_PAGE) || 1;

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentHotels = filteredHotels.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="hotels-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Popular</p>
          <h2 className="section-heading">
            <strong>Popular</strong> Hotels & Rooms {filters?.destination && `in ${filters.destination}`}
          </h2>
        </div>

        {filteredHotels.length === 0 ? (
          <div className="no-results-card" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <i className="fa-solid fa-hotel" style={{ fontSize: '3rem', color: '#F85959', marginBottom: '1rem' }}></i>
            <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>No Hotels Found</h3>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>We couldn't find any stays matching your selected criteria.</p>
            {onClearFilters && (
              <button className="btn btn-primary" onClick={onClearFilters} style={{ background: '#F85959', border: 'none' }}>
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="hotels-grid">
              {currentHotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  location={hotel.location}
                  image={hotel.image}
                  price={hotel.price}
                  description={hotel.description}
                  rating={hotel.rating}
                  amenities={hotel.amenities}
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

export default MoreHotel;
