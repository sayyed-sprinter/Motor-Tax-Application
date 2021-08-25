import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveFeedback } from '../actions/feedbackAction';

const FeedbackForm = ({ id }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const clickHandler = () => {
    dispatch(saveFeedback({ feedback: message, id: id }));
    setMessage('');
  };

  return (
    <section className='feedback-container'>
      <section className='feedback-form'>
        <textarea
          className='feedback-textarea'
          id='message'
          name='message'
          rows='5'
          placeholder='Please share us your experience with this application.'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          onClick={() => clickHandler()}
          className='btn btn--submit floating--btn'
          id='contact-form-submit'
        >
          submit
        </button>
      </section>
    </section>
  );
};

export default FeedbackForm;
