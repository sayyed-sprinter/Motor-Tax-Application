import React, { useState } from 'react';
import InputTextField from './InputTextField';

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
      <section className='form-group'>
        <InputTextField
          value={username}
          setValue={setUsername}
          idValue='name'
          classValue='input--text'
          labelName='name'
          isRegExpValid={true}
        />
        <InputTextField
          value={email}
          setValue={setEmail}
          idValue='email'
          classValue='input--text'
          labelName='email'
          inputType='email'
        />

        <section className='input--textarea'>
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
        </section>

        <section className='submit-info'>
          <button
            type='submit'
            className='btn btn--submit'
            id='contact-form-submit'
          >
            submit
          </button>
        </section>
      </section>
    </form>
  );
};

export default SupportForm;
