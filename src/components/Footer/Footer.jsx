import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-navigation">
      <nav className="navigation-column">
        <button className="navigation-column__btn">For passengers</button>
        <ul className="navigation-column__list">
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Flight schedule
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Services
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Contacts
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Privacy policy
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Feedback form
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navigation-column">
        <button className="navigation-column__btn">Corporate</button>
        <ul className="navigation-column__list">
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Main page
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Ground Handling
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Airport characteristics
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Education Center
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Careers
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navigation-column">
        <button className="navigation-column__btn">Press centre</button>
        <ul className="navigation-column__list">
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Main page
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Latest news
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Social & Art Projects
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Financial reports
            </a>
          </li>
          <li className="navigation-column__list-item">
            <a href="#" className="list-item__link">
              Traffic statistics
            </a>
          </li>
        </ul>
      </nav>
      <nav className="footer-links">
        <div className="contact-us">
          <p className="contact-us__text">Contact us</p>
          <p className="contact-us__number">+380 (044) 500 49 73</p>
        </div>

        <div className="social-links">
          <div className="social-links__text">Follow us:</div>
          <div className="social-links__icons">
            <a className="social-links__icons-item" href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="social-links__icons-item" href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="social-links__icons-item" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="social-links__icons-item" href="#">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a className="social-links__icons-item" href="#">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div className="footer-info">
      <p className="footer-info__text">© 2011-2021 «Kyiv» International Airport</p>
    </div>
  </footer>
);
export default Footer;
