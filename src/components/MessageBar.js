import React from 'react';

const MessageBar = ({ error, text, id }) => {
  return (
    <>
      {error ? (
        <p className='error-message' id={id ? id : `id-${Date.now()}`}>
          {text}&#128532;
        </p>
      ) : (
        <p className='success-message' id={id ? id : `id-${Date.now()}`}>
          {text} &#128522;
        </p>
      )}
    </>
  );
};

export default MessageBar;
