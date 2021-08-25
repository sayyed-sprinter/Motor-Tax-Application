import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

const Star = ({ number }) => {
  return (
    <>
      {number === 1 && <TiStarFullOutline />}
      {number === 2 && (
        <>
          <TiStarFullOutline />
          <TiStarFullOutline />
        </>
      )}
      {number === 3 && (
        <>
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
        </>
      )}
      {number === 4 && (
        <>
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
        </>
      )}
      {number === 5 && (
        <>
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
          <TiStarFullOutline />
        </>
      )}
    </>
  );
};

export default Star;
