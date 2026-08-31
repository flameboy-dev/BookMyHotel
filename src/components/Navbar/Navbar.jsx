import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthModal from '../Auth/AuthModal';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenuDropdown = () => {
    if (window.innerWidth <= 991) {
      setIsMenuDropdownOpen(!isMenuDropdownOpen);
    }
  };

  const openMenuDropdown = () => {
    if (window.innerWidth > 991) {
      setIsMenuDropdownOpen(true);
    }
  };

  const closeMenuDropdown = () => {
    if (window.innerWidth > 991) {
      setIsMenuDropdownOpen(false);
    }
  };

  const openAuth = (mode = 'login') => {
    setIsMenuOpen(false);
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-brand">
            <img src="/Images/logo.png" alt="BookMyHotel" />
          </Link>

          <button
            className="navbar-toggler"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${isMenuOpen ? 'open' : ''}`}></span>
          </button>

          <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              {/* Menu Dropdown */}
              <li
                className="nav-item dropdown"
                onClick={toggleMenuDropdown}
                onMouseEnter={openMenuDropdown}
                onMouseLeave={closeMenuDropdown}
              >
                <span className="nav-link">
                  Menu <span className="dropdown-chevron">▼</span>
                </span>
                <ul className={`dropdown-menu ${isMenuDropdownOpen ? 'show' : ''}`}>
                  <li>
                    <Link to="/admin/login" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      Admin Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/hotel/login" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      Hotel Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/user" className="dropdown-item" onClick={() => setIsMenuOpen(false)}>
                      User Dashboard
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/hotels" className={`nav-link ${isActive('/hotels')}`} onClick={() => setIsMenuOpen(false)}>
                  Hotels
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/restaurant" className={`nav-link ${isActive('/restaurant')}`} onClick={() => setIsMenuOpen(false)}>
                  Restaurant
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn-login"
                  onClick={() => openAuth('login')}
                >
                  Log in / Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Popup Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}

export default Navbar;
