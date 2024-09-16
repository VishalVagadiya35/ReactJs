import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userId = localStorage.getItem('userId');
    if (loggedIn && userId) {
      setIsLoggedIn(true);
      setUserDetails({ id: userId, email: localStorage.getItem('userEmail') }); // Fetch user email if stored
    } else {
      setIsLoggedIn(false);
      setUserDetails(null);
    }
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail'); // Remove user email if stored
    setIsLoggedIn(false);
    setUserDetails(null);
    navigate('/account'); // Redirect to the account page
  };

  return (
    <header id="header" className="header">
      <div className="header__inner">
        <div className="container header__container">
          <div className="header__block header__block--logo">
            <div className="header__logo">
              <div className="header__logo-wrapper">
                <div className="header__logo-item short-logo">
                  <i className="icon icon--bite-logo-black">
                    <span className="screenreader">Bite</span>
                  </i>
                </div>
                <div className="header__logo-item full-logo">
                  <Link to="/">
                    <i className="icon icon--because-its-the-earth-logo-black">
                      <span className="screenreader">Bite</span>
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="header__block hide-mobile">
            <nav id="desktopNav" className="nav hide-mobile" role="navigation">
              <ul className="nav__list list-reset">
                <li className="nav__item js-nav-item" data-nav-menu="Shop" tabIndex="0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Link to="/product" className="nav__link">Shop</Link>
                </li>
                <li className="nav__item js-nav-item" data-nav-menu="About" tabIndex="0">
                  <Link to="/about" className="nav__link">About</Link>
                </li>
                <li className="nav__item js-nav-item" data-nav-menu="Cart" tabIndex="0">
                  <Link to="/impact" className="nav__link">Our Impact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__block header__block--utils">
            <Link to="/account" className="btn-icon header__nav-btn header__nav-btn--account mobile-only" aria-label="account login">
              <i className="icon icon--person-black" role="presentation"></i>
            </Link>
            <Link to="/cart" className="btn-icon header__nav-btn header__nav-btn--cart js-cart-toggle mobile-only">
              <i className="icon icon--bag-black" aria-label="toggle shopping bag" role="presentation"></i>
              <span className="cart-count hide js-cart-count">0</span>
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
