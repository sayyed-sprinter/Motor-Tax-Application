import React, { useEffect, useState } from 'react';
import loginbanner from '../assets/loginbanner.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InputTextField from '../components/InputTextField';
import Button from '../components/Button';
import { adminUserLogin } from '../actions/adminAction';
import { taxpayerLogin } from '../actions/taxpayerActions';
import MessageBar from '../components/MessageBar';
import Switch from '../components/Switch';

const LoginScreen = ({ history }) => {
  const dispatch = useDispatch();

  let taxpayerEmailVal = '';
  let taxpayerPasswordVal = '';
  let adminEmailVal = '';
  let adminPasswordVal = '';
  const adminVal =
    history.location.state !== undefined ? history.location.state.admin : false;

  if (adminVal && history.location.state !== undefined) {
    adminEmailVal = history.location.state.email;
    adminPasswordVal = history.location.state.password;
  }
  if (!adminVal && history.location.state !== undefined) {
    taxpayerEmailVal = history.location.state.email;
    taxpayerPasswordVal = history.location.state.password;
  }

  const taxpayerLoginState = useSelector((state) => state.taxpayerLogin);
  const {
    loading: loadingTaxpayer,
    error: errorTaxpayer,
    loginResponse: taxpayerLoginResponse,
  } = taxpayerLoginState;

  const adminLoginState = useSelector((state) => state.adminLogin);
  const {
    loading: loadingAdmin,
    error: errorAdmin,
    loginResponse: adminLoginResponse,
  } = adminLoginState;

  const [adminEmail, setAdminEmail] = useState(adminEmailVal);
  const [adminPassword, setAdminPassword] = useState(adminPasswordVal);
  const [taxpayerEmail, setTaxpayerEmail] = useState(taxpayerEmailVal);
  const [taxpayerPassword, setTaxpayerPassword] = useState(taxpayerPasswordVal);
  const [admin, setAdmin] = useState(adminVal);

  useEffect(() => {
    if (
      !loadingAdmin &&
      !errorAdmin &&
      adminLoginResponse !== undefined &&
      adminLoginResponse.success
    ) {
      history.push({
        pathname: '/admin',
        state: { isAdmin: true },
      });
    }
    if (
      !loadingTaxpayer &&
      !errorTaxpayer &&
      taxpayerLoginResponse !== undefined &&
      taxpayerLoginResponse.success
    ) {
      history.push({
        pathname: `/profile/${taxpayerLoginResponse.taxpayer.bluebook_number}`,
        state: { isAdmin: false },
      });
    }
  }, [
    loadingAdmin,
    loadingTaxpayer,
    errorAdmin,
    errorTaxpayer,
    adminLoginResponse,
    taxpayerLoginResponse,
    history,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (admin) {
      dispatch(adminUserLogin({ email: adminEmail, password: adminPassword }));
    }
    if (!admin) {
      dispatch(
        taxpayerLogin({ email: taxpayerEmail, password: taxpayerPassword })
      );
    }
  };

  return (
    <section className='login-container' id='login-container'>
      <h1 className='heading-1 login-heading'>
        {admin ? 'Admin' : 'Taxpayer'} &ndash; Login
      </h1>
      <section className='login-detail-box'>
        <section className='login-banner'>
          <a
            href='https://www.freepik.com/vectors/infographic'
            className='banner-image-link'
          >
            <img
              className='banner-image'
              src={loginbanner}
              alt='Infographic vector created by vectorjuice - www.freepik.com'
            />
          </a>
        </section>
        <section className='login-details'>
          <Switch value={admin} setValue={setAdmin} text='Admin' />
          <form className='login-form' onSubmit={submitHandler}>
            <section className='login-text-box'>
              {admin ? (
                <>
                  <InputTextField
                    value={adminEmail}
                    setValue={setAdminEmail}
                    idValue='email'
                    classValue='input--text'
                    labelName='email'
                    inputType='email'
                  />
                  <InputTextField
                    value={adminPassword}
                    setValue={setAdminPassword}
                    idValue='password'
                    classValue='input--text'
                    labelName='password'
                    inputType='password'
                  />
                </>
              ) : (
                <>
                  <InputTextField
                    value={taxpayerEmail}
                    setValue={setTaxpayerEmail}
                    idValue='email'
                    classValue='input--text'
                    labelName='email'
                    inputType='email'
                  />
                  <InputTextField
                    value={taxpayerPassword}
                    setValue={setTaxpayerPassword}
                    idValue='password'
                    classValue='input--text'
                    labelName='password'
                    inputType='password'
                  />
                </>
              )}
            </section>
            <section className='submit-info'>
              <p className='no-account'>
                Do not have an account? &nbsp;
                <Link to='/signup' className='link-primary' id='signup-link'>
                  Register here
                </Link>
              </p>

              {admin ? (
                loadingAdmin ? (
                  <Button
                    text='Loading..'
                    classes='btn btn--primary btn--pay'
                    id='admin-btn-login-loading'
                  />
                ) : (
                  <Button
                    text='Login'
                    classes='btn btn--primary btn--pay'
                    id='admin-btn-login'
                  />
                )
              ) : loadingTaxpayer ? (
                <Button
                  text='Loading..'
                  classes='btn btn--primary btn--pay'
                  id='taxpayer-btn-login-loading'
                />
              ) : (
                <Button
                  text='Login'
                  classes='btn btn--primary btn--pay'
                  id='taxpayer-btn-login'
                />
              )}
            </section>
          </form>

          {admin
            ? !loadingAdmin &&
              errorAdmin && <MessageBar text={errorAdmin} error='true' />
            : !loadingTaxpayer &&
              errorTaxpayer && <MessageBar text={errorTaxpayer} error='true' />}
        </section>
      </section>
    </section>
  );
};

export default LoginScreen;
