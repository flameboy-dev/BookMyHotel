import React, { useState } from 'react';
import './FilterBar.css';

const RestaurantFilterBar = ({ onSearch }) => {
  const todayStr = new Date().toISOString().split('T')[0];

  const [filters, setFilters] = useState({
    location: '',
    date: '',
    time: '',
    cuisine: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Date validation: Do not allow past reservation dates
    if (filters.date && filters.date < todayStr) {
      alert('Reservation date cannot be in the past.');
      return;
    }

    if (onSearch) {
      onSearch(filters);
    }
  };

  return (
    <section
      aria-labelledby="filter-heading"
      className="filter-bar-container"
      role="search"
    >
      <div className="filter-header">
        <span className="filter-badge">
          <i className="fa-solid fa-sliders badge-icon"></i> SEARCH &amp; FILTER
        </span>
        <h1 id="filter-heading" className="filter-title">Find Your Perfect Dining</h1>
        <p id="filter-description" className="filter-subtitle">
          Refine your restaurant search by location, date, time, cuisine &amp; ratings
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="filter-grid"
        aria-describedby="filter-description"
      >
        {/* Location */}
        <div className="filter-group">
          <label htmlFor="location">
            <i className="fa-solid fa-location-dot label-icon"></i> Location
          </label>
          <select
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
          >
            <option value="">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Dharamshala">Dharamshala</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Udaipur">Udaipur</option>
            <option value="Kochi">Kochi</option>
            <option value="Shimla">Shimla</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Varanasi">Varanasi</option>
          </select>
        </div>

        {/* Reservation Date */}
        <div className="filter-group">
          <label htmlFor="date">
            <i className="fa-solid fa-calendar-days label-icon"></i> Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
            aria-label="Reservation date"
            min={todayStr}
          />
        </div>

        {/* Time */}
        <div className="filter-group">
          <label htmlFor="time">
            <i className="fa-solid fa-clock label-icon"></i> Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={filters.time}
            onChange={handleChange}
            aria-label="Reservation time"
          />
        </div>

        {/* Cuisine */}
        <div className="filter-group">
          <label htmlFor="cuisine">
            <i className="fa-solid fa-utensils label-icon"></i> Cuisine
          </label>
          <select
            id="cuisine"
            name="cuisine"
            value={filters.cuisine}
            onChange={handleChange}
          >
            <option value="">Any Cuisine</option>
            <option value="Seafood">Seafood</option>
            <option value="Organic">Organic / Healthy</option>
            <option value="Curry">Bengali / Indian Curry</option>
            <option value="Pasta">Pasta &amp; Pizza</option>
          </select>
        </div>

        {/* Star Rating */}
        <div className="filter-group">
          <label htmlFor="rating">
            <i className="fa-solid fa-star label-icon"></i> Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={filters.rating}
            onChange={handleChange}
          >
            <option value="">Any Rating</option>
            <option value="4.8">★★★★★ (4.8+ stars)</option>
            <option value="4.5">★★★★☆ (4.5+ stars)</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="search-btn-group">
          <button
            type="submit"
            className="search-button"
            aria-label="Search restaurants"
          >
            <span>Search Dining</span>
            <i className="fa-solid fa-arrow-right search-btn-icon" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RestaurantFilterBar;
