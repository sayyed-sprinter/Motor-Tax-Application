import React, { useState } from 'react';

const SupportForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  console.log(message);

  return (
    <form
      action='https://formspree.io/f/mleapgae'
      method='POST'
      className='support-form--grid'
    >
      <div className='form-group'>
        <div className='input--text'>
          <label className='label' htmlFor='name'>
            name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='input--text'>
          <label className='label ' htmlFor='email'>
            email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input--textarea'>
          <label className='label label-textarea' htmlFor='message'>
            message
          </label>
          <textarea
            id='message'
            name='message'
            rows='5'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className='submit-info'>
          <button
            type='submit'
            className='btn btn--submit'
            id='contact-form-submit'
          >
            submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default SupportForm;
