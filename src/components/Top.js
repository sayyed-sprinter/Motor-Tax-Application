import React from 'react';
import { BsArrowUp } from 'react-icons/bs';

const Top = () => {
  const clickHandler = () => {
    window.scroll({
      top: 100,
      left: 100,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className='scroll-top'
      id='scroll-top'
      onClick={() => clickHandler()}
    >
      <BsArrowUp className='scroll-top-icon' />
    </section>
  );
};

export default Top;
