import React from 'react';

const Button = ({ text }) => {
  return (
    <button type='submit' className='btn btn--primary btn--pay'>
      {text}
    </button>
  );
};

export default Button;
