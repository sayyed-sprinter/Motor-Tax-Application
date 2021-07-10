import React from 'react';

const Button = ({ text, classes, disabled }) => {
  return (
    <>
      {disabled ? (
        <button className={classes} disabled>
          {text}
        </button>
      ) : (
        <button type='submit' className={classes} disabled={disabled}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
