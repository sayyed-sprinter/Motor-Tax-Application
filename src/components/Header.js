import React from 'react';
import Nav from './Nav';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='logo-img' />
        </Link>
      </section>
      <nav className='nav'>
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
