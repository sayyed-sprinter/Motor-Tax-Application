import React from 'react';

import Nav from './Nav';

const HamburgerBar = () => {
  let shouldUseLink = false;
  const changeHandler = (e) => {
    if (e.target.checked) {
      shouldUseLink = true;
    }
  };
  return (
    <section className='hamburger-bar'>
      <input
        type='checkbox'
        className='hamburger-bar__checkbox'
        id='navi__toggle'
        onChange={(e) => changeHandler(e)}
      />

      <label className='hamburger-bar__button' htmlFor='navi__toggle'>
        <span className='hamburger-bar__icon'>&nbsp;</span>
      </label>
      <section className='hamburger-bar__background'>&nbsp;</section>
      <nav className='hamburger-bar__nav'>
        <Nav
          shouldUseLink={shouldUseLink}
          ulClassName='hamburger-bar__list'
          liClassName='hamburger-bar__item'
          aClassName='hamburger-bar__link'
          type='mob'
        />
      </nav>
    </section>
  );
};

export default HamburgerBar;
