import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer footer-container'>
      <p className='footer-text'>
        Designed and developed with{' '}
        <span>
          <FaHeart className='footer-heart' />
        </span>
      </p>
      <p className='footer-text'>
        &copy; The Sprinters {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
