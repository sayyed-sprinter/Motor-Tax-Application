import React from 'react';

const Button = ({ text, classes, disabled, id}) => {
  return (
    <>
      {disabled ? (
        <button className={classes} disabled>
          {text}
        </button>
      ) : (
        <button type='submit' className={classes} id={id}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
