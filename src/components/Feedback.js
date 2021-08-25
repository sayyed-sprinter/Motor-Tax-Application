import React from 'react';
import { useEffect } from 'react';

import { FaQuoteLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getFeedback } from '../actions/feedbackAction';

import Loader from './Loader';
import MessageBar from './MessageBar';
import Star from './Star';

const Feedback = () => {
  const dispatch = useDispatch();

  const { loading, error, feedback } = useSelector(
    (state) => state.getFeedback
  );

  useEffect(() => {
    dispatch(getFeedback());
  }, [dispatch]);

  return (
    <>
      <h2 className='heading-1 taxpayer-feedback-heading' id='pay-now'>
        Taxpayer reviews
      </h2>
      <section className='taxpayer-feedback-container'>
        {loading ? (
          <Loader />
        ) : error ? (
          <MessageBar error={true} text={error} />
        ) : (
          feedback !== undefined && (
            <>
              {feedback.map((item, index) => (
                <section className='taxpayer-feedback' key={index}>
                  <FaQuoteLeft />
                  <h2 className='taxpayer-name'>{item.taxpayerName}</h2>
                  <section className='taxpayer-rating'>
                    <Star number={item.taxpayerRating} />
                  </section>
                  <p className='taxpayer-feedback'>{item.taxpayerFeedback}</p>
                </section>
              ))}
            </>
          )
        )}
      </section>
    </>
  );
};

export default Feedback;
