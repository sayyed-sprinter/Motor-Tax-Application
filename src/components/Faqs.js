import React from 'react';

import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

const FAQs = ({ faqs }) => {
  const clickHandler = (e) => {
    const allAnswer = document.querySelectorAll('.answer-box');
    const allIconDown = document.querySelectorAll('.icon-down');
    const allIconRight = document.querySelectorAll('.icon-right');
    allAnswer.forEach((item) => {
      item.classList.add('hide-answer');
    });
    allIconDown.forEach((item) => {
      item.classList.add('icon-hide');
    });
    allIconRight.forEach((item) => {
      item.classList.remove('icon-hide');
    });

    const index = e.target.className.split('-')[1];
    const targetAnswer = document.querySelector(`.answer-box-${index}`);
    const iconDown = document.querySelector(`.icon-down-${index}`);
    const iconRight = document.querySelector(`.icon-right-${index}`);
    targetAnswer.classList.toggle('hide-answer');
    iconDown.classList.toggle('icon-hide');
    iconRight.classList.toggle('icon-hide');
  };

  return (
    <>
      {faqs &&
        faqs.map((faq, index) => (
          <section className='faqs' key={index}>
            <section className='question-box'>
              <span className='icons-container'>
                <FaAngleDown
                  className={`icon-down icon-down-${index} icon-hide`}
                />

                <FaAngleRight className={`icon-right icon-right-${index}`} />
              </span>
              <h3
                className={`question question-${index}`}
                onClick={(e) => {
                  clickHandler(e);
                }}
              >
                {faq.question}
              </h3>
            </section>
            <section className={`hide-answer answer-box answer-box-${index}`}>
              <p className='answer'>{faq.answer}</p>
            </section>
          </section>
        ))}
    </>
  );
};

export default FAQs;
