import React from 'react';

const MessageBar = ({ error, text }) => {
  return (
    <>
      {error ? (
        <p className='error-message'>{text}&#128532;</p>
      ) : (
        <p className='success-message'>{text} &#128522;</p>
      )}
    </>
  );
};

export default MessageBar;
