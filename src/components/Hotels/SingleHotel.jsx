import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { hotels as initialHotels } from '../../data/MoreHotels';
import { hotels as featuredHotels } from '../../data/hotels';
import './SingleHotel.css';
import { FaCheckCircle, FaTimes, FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

function SingleHotel() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const numericId = Number(id);
  const hotel = initialHotels.find(h => h.id === numericId) || featuredHotels.find(h => h.id === numericId);

  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  // Helper to normalize price format (supports both number and object)
  const getPriceForType = (type) => {
    if (!hotel || !hotel.price) return 0;
    if (typeof hotel.price === 'number') return hotel.price;
    if (typeof hotel.price === 'object') {
      return hotel.price[type] || Object.values(hotel.price)[0] || 0;
    }
    return 0;
  };

  const roomOptions = hotel && typeof hotel.price === 'object'
    ? Object.keys(hotel.price)
    : ["Standard Room", "Deluxe Room", "Suite"];

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
    aadharNo: '',
    roomType: roomOptions[0] || 'Standard Room',
    checkInDate: '',
    checkOutDate: '',
    guests: 1
  });

  if (!hotel) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h2>Hotel Not Found</h2>
        <p>The requested hotel details could not be found.</p>
        <button className="btn btn-primary" onClick={() => navigate('/hotels')}>Back to Hotels</button>
      </div>
    );
  }

  const roomLabels = ["Bedroom", "Deluxe Room", "Super Deluxe Room"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const { checkInDate, checkOutDate, roomType, guests } = formData;

    if (!checkInDate || !checkOutDate) return 0;

    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkOut <= checkIn) return 0;

    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const pricePerNight = getPriceForType(roomType);
    const roomsNeeded = Math.ceil(Number(guests) / 2);

    return diffDays * pricePerNight * roomsNeeded;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Date validation
    if (checkIn < today) {
      alert('Check-in date cannot be in the past.');
      return;
    }

    if (checkOut <= checkIn) {
      alert('Check-out date must be after check-in date.');
      return;
    }

    const totalAmount = calculateTotal();

    const newBooking = {
      id: 'BK-' + Date.now(),
      hotelId: hotel.id,
      hotelName: hotel.name,
      hotelImage: hotel.image,
      location: hotel.location,
      ...formData,
      totalAmount,
      bookingDate: new Date().toLocaleDateString(),
      status: 'Confirmed'
    };

    // Save booking to localStorage for client persistence
    const existingBookings = JSON.parse(localStorage.getItem('bmh_bookings') || '[]');
    existingBookings.push(newBooking);
    localStorage.setItem('bmh_bookings', JSON.stringify(existingBookings));

    setShowConfirmation(true);
    setTimeout(() => {
      setShowBookingForm(false);
    }, 2500);
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setFormData({
      fullName: '',
      address: '',
      phone: '',
      email: '',
      aadharNo: '',
      roomType: roomOptions[0] || 'Standard Room',
      checkInDate: '',
      checkOutDate: '',
      guests: 1
    });
  };

  return (
    <section className="single-hotel">
      {showBookingForm && (
        <div className={`booking-modal ${showBookingForm ? 'modal-enter' : ''}`}>
          <div className="booking-form-container">
            <div className="booking-form-header">
              <h2>Book Your Stay at {hotel.name}</h2>
              <button className="close-button" onClick={() => setShowBookingForm(false)}>
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="fullName"><FaUserAlt className="input-icon" /> Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address"><i className="fa fa-home input-icon" /> Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="123 Main St"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone"><i className="fa fa-phone input-icon" /> Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="9876543210"
                  pattern="[0-9]{10}"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email"><i className="fa fa-envelope input-icon" /> Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="aadharNo"><i className="fa fa-id-card input-icon" /> Aadhar Number</label>
                <input
                  type="text"
                  id="aadharNo"
                  name="aadharNo"
                  value={formData.aadharNo}
                  onChange={handleInputChange}
                  required
                  placeholder="1234-5678-9012"
                />
              </div>

              <div className="form-group">
                <label htmlFor="roomType"><i className="fa fa-bed input-icon" /> Room Type</label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  required
                >
                  {roomOptions.map((type) => (
                    <option key={type} value={type}>
                      {type} (₹{getPriceForType(type)} / night)
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="checkInDate"><FaCalendarAlt className="input-icon" /> Check-in Date</label>
                <input
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                  min={todayStr}
                />
              </div>

              <div className="form-group">
                <label htmlFor="checkOutDate"><FaCalendarAlt className="input-icon" /> Check-out Date</label>
                <input
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                  min={formData.checkInDate || todayStr}
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests"><FaUserAlt className="input-icon" /> Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max={hotel.guests || 10}
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                />
                <p className="room-note">
                  Note: Each room accommodates up to 2 guests. You'll need <strong>{Math.ceil(Number(formData.guests) / 2)}</strong> room(s).
                </p>
              </div>

              <div className="price-summary">
                <div className="price-item">
                  <span>Price per night:</span>
                  <span>₹{getPriceForType(formData.roomType)}</span>
                </div>
                {formData.checkInDate &&
                  formData.checkOutDate &&
                  new Date(formData.checkOutDate) > new Date(formData.checkInDate) && (
                    <div className="price-item total">
                      <span>Total estimate:</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                  )}
              </div>

              <button type="submit" className="btn btn-primary confirm-booking-btn">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className={`confirmation-modal ${showConfirmation ? 'confirmation-enter' : ''}`}>
          <div className="confirmation-content">
            <FaCheckCircle className="confirmation-icon" />
            <h2>Booking Confirmed!</h2>
            <div className="confirmation-details">
              <p><strong>Hotel:</strong> {hotel.name}</p>
              <p><strong>Guest:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone:</strong> {formData.phone}</p>
              <p><strong>Room Type:</strong> {formData.roomType}</p>
              <p><strong>Dates:</strong> {formData.checkInDate} to {formData.checkOutDate}</p>
              <p><strong>Total:</strong> ₹{calculateTotal()}</p>
            </div>
            <button className="btn btn-primary close-confirmation-btn" onClick={closeConfirmation}>Done</button>
          </div>
        </div>
      )}

      <div className="single-hotel-card container">
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
        <div className="single-hotel-content">
          <div className="hotel-main">
            <div className="main-hotel-image">
              <img src={hotel.image} alt={hotel.name} />
            </div>
            <h1 className="hotel-title">{hotel.name}</h1>
            <p className="hotel-location"><i className="fa-solid fa-location-dot"></i> {hotel.location}</p>
            <div className="hotel-room-details">
              <span>🛏 {hotel.rooms || 2} Bedrooms</span>
              <span>习 {hotel.bathrooms || 1} Bathrooms</span>
              <span>👥 Sleeps {hotel.guests || 4} Guests</span>
            </div>
            <div className="hotel-description">
              <h2>About This Hotel</h2>
              <p>{hotel.description}</p>
            </div>
            <div className="hotel-info">
              <div className="info-item">
                <h4>Rating:</h4>
                <p>{hotel.rating} ★</p>
              </div>
              <div className="info-item">
                <h4>Starting Price:</h4>
                <p>₹{getPriceForType(roomOptions[0])} / night</p>
              </div>
            </div>
            <div className="hotel-amenities">
              <h3>Amenities</h3>
              <ul>
                {hotel.amenities?.map((amenity, index) => (
                  <li key={index}><i className="fa fa-check"></i> {amenity}</li>
                ))}
              </ul>
            </div>
            <div className="hotel-booking">
              <button className="btn btn-primary" onClick={() => setShowBookingForm(true)}>Book Now</button>
            </div>
            <div className="hotel-map">
              <h3>Location</h3>
              <iframe
                title="Hotel Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(hotel.location)}&output=embed`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="room-gallery">
            {hotel.images?.map((img, index) => (
              <div className="room-image-card" key={index}>
                <img src={img} alt={`Room ${index + 1}`} />
                <p className="room-label">{roomLabels[index] || `Room ${index + 1}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleHotel;
