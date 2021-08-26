import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveFeedback } from '../actions/feedbackAction';
import MessageBar from './MessageBar';

const FeedbackForm = ({ id }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [tempSuccess, setTempSuccess] = useState(false);

  const { loading, message: responseMessage } = useSelector(
    (state) => state.savedFeedback
  );

  useEffect(() => {
    const setTimer = setTimeout(() => {
      setTempSuccess(false);
    }, 10000);
    return () => clearTimeout(setTimer);
  }, [tempSuccess]);

  const clickHandler = () => {
    dispatch(saveFeedback({ feedback: message, id: id }));
    setMessage('');
    setTempSuccess(true);
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
          id='feedback-form-submit'
        >
          submit
        </button>
      </section>
      {loading ? (
        <MessageBar
          text='Submitting your feedback...'
          id='feedback-response-message'
        />
      ) : (
        tempSuccess && (
          <MessageBar text={responseMessage} id='feedback-response-message' />
        )
      )}
    </section>
  );
};

export default FeedbackForm;
