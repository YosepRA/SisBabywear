import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContactForm } from './ContactForm';

export class Contact extends Component {
  render() {
    return (
      <main className="main-container">
        <div className="container">
          <section className="info">
            <h1 className="info__title">Contact</h1>

            <p className="info__preface">
              We would love to hear from you. Please contact me using these
              methods.
            </p>

            <div className="info__contact">
              <div className="info__contact-wrapper info__contact-phone">
                <span className="info__contact-logo">
                  <FontAwesomeIcon icon={['fas', 'phone']} />
                </span>
                <span className="info__contact-text">+6285413677895</span>
              </div>

              <div className="info__contact-wrapper info__contact-email">
                <span className="info__contact-logo">
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                </span>
                <span className="info__contact-text">
                  customer&#95;service&#64;sisbabywear&#46;com
                </span>
              </div>
            </div>
          </section>

          <ContactForm className="contact-form" />
        </div>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('contact');
  }

  componentWillUnmount() {
    document.body.classList.remove('contact');
  }
}
