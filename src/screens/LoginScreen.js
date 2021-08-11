import React from 'react';
import { Link } from 'react-router-dom';

const LoginScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  return (
    <section className='login-container' id='login-container'>
      <h1 className='heading-1 login-heading'>Login</h1>
      <form className='login-form'>
        {/* <section className='text-box'>
          <InputTextField
            value={email}
            setValue={setEmail}
            idValue='email'
            classValue='input--text'
            labelName='email'
            inputType='email'
          />
          <InputTextField
            value={password}
            setValue={setPassword}
            idValue='password'
            classValue='input--text'
            labelName='password'
            inputType='password'
          />
        </section> */}
        <section className='submit-info'>
          <p className='no-account'>
            {' '}
            Do not have an account? &nbsp;
            <Link to='/signup' className='link-primary' id='signup-link'>
              Register here
            </Link>
          </p>

          {/* <Button
          text='Login'
          classes='btn btn--primary btn--pay'
          id='btn-continue'
        /> */}
        </section>
      </form>
    </section>
  );
};

export default LoginScreen;
