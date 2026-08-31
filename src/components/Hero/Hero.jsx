import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const exploreWords = ['amazing city', 'places', 'restaurants', 'hotels'];
  const [exploreIndex, setExploreIndex] = useState(0);
  const [exploreText, setExploreText] = useState('');
  const [exploreDeleting, setExploreDeleting] = useState(false);
  const [explorePause, setExplorePause] = useState(false);

  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const current = exploreWords[exploreIndex];
    let speed = exploreDeleting ? 70 : 150;

    if (explorePause) speed = 5000;

    const timeout = setTimeout(() => {
      if (!explorePause) {
        setExploreText((prev) => {
          if (!exploreDeleting) {
            const next = current.substring(0, prev.length + 1);
            if (next === current) setExplorePause(true);
            return next;
          } else {
            const next = current.substring(0, prev.length - 1);
            if (next === '') {
              setExploreDeleting(false);
              setExploreIndex((prevIndex) => (prevIndex + 1) % exploreWords.length);
            }
            return next;
          }
        });
      } else {
        setExplorePause(false);
        setExploreDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [exploreText, exploreDeleting, explorePause, exploreIndex]);

  const actionWords = ['stay', 'eat', 'shop', 'visit'];
  const [actionIndex, setActionIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const word = actionWords[actionIndex];
    let speed = isDeleting ? 70 : 150;

    if (pause) speed = 5000;

    const timeout = setTimeout(() => {
      if (!pause) {
        setTypedText((prev) => {
          if (!isDeleting) {
            const next = word.substring(0, prev.length + 1);
            if (next === word) setPause(true);
            return next;
          } else {
            const next = word.substring(0, prev.length - 1);
            if (next === '') {
              setIsDeleting(false);
              setActionIndex((prevIndex) => (prevIndex + 1) % actionWords.length);
            }
            return next;
          }
        });
      } else {
        setPause(false);
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, pause, actionIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/hotels', {
      state: {
        destination,
        keyword
      }
    });
  };

  return (
    <div className="hero-section" style={{ backgroundImage: "url('/Images/bg_1.jpg')" }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <strong>Explore</strong><br />
            your {exploreText && <span className="typing-text">{exploreText}</span>}
          </h1>
          <p className="hero-description">
            Find great places to <span className="typing-text">{typedText}</span> with insider tips.
          </p>

          <div className="search-form">
            <form onSubmit={handleSubmit}>
              <div className="search-form-row">
                <div className="search-input">
                  <i className="fa-solid fa-magnifying-glass input-icon"></i>
                  <input
                    type="text"
                    placeholder="Ex: food, service, hotel"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </div>
                <div className="search-input">
                  <i className="fa-solid fa-location-dot input-icon"></i>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="">Where (All Locations)</option>
                    <option value="Shimla">Shimla, India</option>
                    <option value="Manali">Manali, India</option>
                    <option value="Varanasi">Varanasi, India</option>
                    <option value="Goa">Goa, India</option>
                    <option value="Kashmir">Kashmir, India</option>
                    <option value="Mumbai">Mumbai, India</option>
                    <option value="Jaipur">Jaipur, India</option>
                    <option value="Kedarnath">Kedarnath, India</option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="search-submit">Search</button>
                </div>
              </div>
            </form>
          </div>

          <p className="browse-text">Or browse the highlights</p>
          <div className="browse-options">
            <Link to="/restaurant" className="browse-option">
              <i className="fa-solid fa-utensils"></i>
              <span>Restaurant</span>
            </Link>
            <Link to="/hotels" className="browse-option">
              <i className="fa-solid fa-hotel"></i>
              <span>Hotel</span>
            </Link>
            <Link to="/hotels" className="browse-option">
              <i className="fa-solid fa-location-dot"></i>
              <span>Places</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
