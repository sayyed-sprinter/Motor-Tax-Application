import React, { useState } from 'react';

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

const FAQs = ({ faqs }) => {
  const [displayAns, setDisplayAns] = useState(false);

  return (
    <>
      {faqs &&
        faqs.map((faq, index) => (
          <section className='faqs' key={index}>
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
                {faq.question}
              </h3>
            </section>
            <section
              className={
                displayAns ? `show-answer answer-box` : 'hide-answer answer-box'
              }
            >
              <p className='answer'>{faq.answer}</p>
            </section>
          </section>
        ))}
    </>
  );
};

export default FAQs;
