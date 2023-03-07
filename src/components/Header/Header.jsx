import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="logo" src="https://www.linkpicture.com/q/logo_1.png" alt="Logo" />
    </Link>
    <div className="navigation-wrapper"></div>
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list__item">
          <span className="navigation-list__item-text">For passengers</span>
        </li>
        <li className="navigation-list__item">
          <span className="navigation-list__item-text"> IEV Services</span>
        </li>
        <li className="navigation-list__item">
          <span className="navigation-list__item-text">VIP</span>
        </li>
        <li className="navigation-list__item">
          <span className="navigation-list__item-text">Corporate</span>
        </li>
        <li className="navigation-list__item ">
          <span className="navigation-list__item-text">Press Room</span>
        </li>
      </ul>
    </nav>
    <div className="language-menu">
      <button className="language-menu__btn">EN</button>
    </div>
    <button className="navigation-menu-mobile-btn">
      <i className="fa-solid fa-bars"></i>
    </button>
  </header>
);

export default Header;
