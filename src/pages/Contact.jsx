import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Contact.css';

const Contact = ({ imagesPath }) => {
  return (
    <div className="page-container contact-page">
      <main className="contact-main" id='contact-intro'>
        <h1 className="contact-title">Contact Us</h1>
      </main>
      <main className='contact-form-main' id='contact-form'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf8XHmSJSSKx-b19lbVLORg6s9UHuUoU9k5Z-kqGZXwlwOjdw/viewform?embedded=true" width="600" height="900" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
      </main>
    </div>
  );
};

export default Contact;
