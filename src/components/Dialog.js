import React from 'react';

const Dialog = ({ type, text }) => {
  return (
    <section
      className={
        type
          ? `dialog-container dialog--${type}`
          : 'dialog-container dialog--normal'
      }
    >
      <p className='dialog-text'>{text}</p>
    </section>
  );
};

export default Dialog;
