import React from 'react';
import Nav from './Nav';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import HamburgerBar from './HamburgerBar';

const Header = () => {
  return (
    <header>
      <section className='logo'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='logo-img' />
        </Link>
      </section>
      <HamburgerBar />
      <nav className='nav'>
        <Nav
          ulClassName='nav-lists'
          liClassName='nav-item'
          aClassName='nav-link'
        />
      </nav>
    </header>
  );
};

export default Header;
