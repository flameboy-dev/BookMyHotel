import React, { useState, useEffect } from 'react';
import './FilterBar.css';
import { FaLocationDot, FaCalendarDays, FaStar, FaSliders, FaMagnifyingGlass } from 'react-icons/fa6';

const FilterBar = ({ onSearch, initialFilters }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [filters, setFilters] = useState({
    destination: initialFilters?.destination || '',
    dateFrom: initialFilters?.dateFrom || '',
    dateTo: initialFilters?.dateTo || '',
    priceMin: initialFilters?.priceMin || 500,
    priceMax: 50000,
    rating: initialFilters?.rating || ''
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters((prev) => ({
        ...prev,
        destination: initialFilters.destination !== undefined ? initialFilters.destination : prev.destination,
      }));
    }
  }, [initialFilters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (filters.dateFrom && filters.dateFrom < todayStr) {
      alert('Check-in date cannot be in the past.');
      return;
    }

    if (filters.dateFrom && filters.dateTo && filters.dateTo < filters.dateFrom) {
      alert('Check-out date must be after or on check-in date.');
      return;
    }

    if (onSearch) {
      onSearch(filters);
    }
  };

  return (
    <section className="filter-bar-container" role="search">
      <div className="filter-header">
        <div className="filter-badge">
          <FaSliders className="badge-icon" />
          <span>Smart Search</span>
        </div>
        <h2 className="filter-title">Find Your Perfect Stay</h2>
        <p className="filter-subtitle">Search luxury hotels, resorts, and chalets across top destinations</p>
      </div>

      <form onSubmit={handleSubmit} className="filter-grid">
        {/* Destination */}
        <div className="filter-group">
          <label htmlFor="destination">
            <FaLocationDot className="label-icon" /> Destination
          </label>
          <div className="input-wrapper">
            <select
              id="destination"
              name="destination"
              value={filters.destination}
              onChange={handleChange}
            >
              <option value="">All Locations</option>
              <option value="Shimla">Shimla</option>
              <option value="Manali">Manali</option>
              <option value="Varanasi">Varanasi</option>
              <option value="Goa">Goa</option>
              <option value="Kashmir">Kashmir</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Jaipur">Jaipur</option>
              <option value="Kedarnath">Kedarnath</option>
            </select>
          </div>
        </div>

        {/* Check-in Date */}
        <div className="filter-group">
          <label htmlFor="dateFrom">
            <FaCalendarDays className="label-icon" /> Check In
          </label>
          <div className="input-wrapper">
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={filters.dateFrom}
              onChange={handleChange}
              min={todayStr}
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="filter-group">
          <label htmlFor="dateTo">
            <FaCalendarDays className="label-icon" /> Check Out
          </label>
          <div className="input-wrapper">
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              value={filters.dateTo}
              onChange={handleChange}
              min={filters.dateFrom || todayStr}
            />
          </div>
        </div>

        {/* Star Rating */}
        <div className="filter-group">
          <label htmlFor="rating">
            <FaStar className="label-icon" /> Minimum Rating
          </label>
          <div className="input-wrapper">
            <select
              id="rating"
              name="rating"
              value={filters.rating}
              onChange={handleChange}
              className="rating-select"
            >
              <option value="">Any Rating</option>
              <option value="4.8">5 ★ (4.8+ Top Rated)</option>
              <option value="4.5">4 ★ (4.5+ Highly Rated)</option>
              <option value="4.0">4 ★ (4.0+ Recommended)</option>
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="filter-group price-range-group">
          <div className="price-label-row">
            <label htmlFor="priceRange">Max Budget</label>
            <span className="price-badge-val">
              {Number(filters.priceMin) > 500 ? `Up to ₹${Number(filters.priceMin).toLocaleString()}` : 'Any Price'}
            </span>
          </div>
          <div className="price-range-container">
            <span className="price-limit">₹500</span>
            <input
              type="range"
              id="priceRange"
              name="priceMin"
              min="500"
              max="50000"
              step="500"
              value={filters.priceMin}
              onChange={handleChange}
              className="price-slider"
            />
            <span className="price-limit">₹50,000</span>
          </div>
        </div>

        {/* Search Button */}
        <div className="filter-group search-btn-group">
          <button type="submit" className="search-button">
            <FaMagnifyingGlass className="search-btn-icon" />
            <span>Search Stays</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default FilterBar;