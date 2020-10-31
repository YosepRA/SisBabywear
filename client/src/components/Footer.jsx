import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <header className="page-footer__brand">
          <NavLink to="/" className="page-footer__brand-link">
            SisBabywear
          </NavLink>
        </header>

        <nav className="page-footer__footer-nav">
          <NavLink to="/" className="page-footer__nav-link" exact>
            Home
          </NavLink>
          <NavLink to="/shop" className="page-footer__nav-link">
            Shop
          </NavLink>
          <NavLink to="/contact" className="page-footer__nav-link">
            Contact
          </NavLink>
        </nav>

        <div className="page-footer__social-media">
          <p className="page-footer__social-media__title">
            Follow us on social media
          </p>

          <ul className="page-footer__social-media__list">
            <li className="page-footer__social-media__list-item page-footer__social-media__list-item--facebook">
              <span className="page-footer__social-media__icon">
                <FontAwesomeIcon icon={['fab', 'facebook']} />
              </span>
              <span className="page-footer__social-media__username">
                SisBabywear
              </span>
            </li>

            <li className="page-footer__social-media__list-item page-footer__social-media__list-item--twitter">
              <span className="page-footer__social-media__icon">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </span>
              <span className="page-footer__social-media__username">
                @SisBabywear
              </span>
            </li>

            <li className="page-footer__social-media__list-item page-footer__social-media__list-item--instagram">
              <span className="page-footer__social-media__icon">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </span>
              <span className="page-footer__social-media__username">
                @SisBabywear
              </span>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
