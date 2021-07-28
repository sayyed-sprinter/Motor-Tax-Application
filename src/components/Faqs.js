import React, { useState } from 'react';

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

const FAQs = () => {
  const [displayAns, setDisplayAns] = useState(false);

  return (
    <>
      <section className='faqs'>
        <section className='question-box'>
          <span className='icons-container'>
            {displayAns ? (
              <FaAngleDown
                className='icon-down'
                onClick={(e) => {
                  setDisplayAns(!displayAns);
                }}
              />
            ) : (
              <FaAngleRight
                className='icon-right'
                onClick={(e) => {
                  setDisplayAns(!displayAns);
                }}
              />
            )}
          </span>
          <h3
            className='question'
            onClick={(e) => {
              setDisplayAns(!displayAns);
            }}
          >
            How can I get Help?
          </h3>
        </section>
        <section
          className={
            displayAns ? `show-answer answer-box` : 'hide-answer answer-box'
          }
        >
          <p className='answer'>click on tax details</p>
        </section>
      </section>
    </>
  );
};

export default FAQs;
