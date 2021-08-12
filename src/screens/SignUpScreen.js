import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import InputTextField from '../components/InputTextField';
import Button from '../components/Button';
import { createAdminUser } from '../actions/adminAction';
import { BiLinkAlt } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
import { createTaxpayerAcc } from '../actions/taxpayerActions';
import MessageBar from '../components/MessageBar';

const SignUpScreen = ({ history }) => {
  const dispatch = useDispatch();

  const taxpayerRes = useSelector((state) => state.taxpayerSignup);
  const {
    loading: loadingTaxpayer,
    signupResponse: taxpayerSignupResponse,
    error: errorTaxpayer,
  } = taxpayerRes;

  const adminRes = useSelector((state) => state.adminSignup);
  const {
    loading: loadingAdmin,
    signupResponse: adminSignupResponse,
    error: errorAdmin,
  } = adminRes;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [taxpayerName, setTaxpayerName] = useState('');
  const [bluebookNumber, setBluebookNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [province, setProvince] = useState('');
  const [lot, setLot] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [engineCC, setEngineCC] = useState('');
  const [vehicleRegisteredDate, setVehicleRegisteredDate] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastTaxPaidDate, setLastTaxPaidDate] = useState('');
  const [policyNum, setPolicyNum] = useState('');
  const [taxAmtPaid, setTaxAmtPaid] = useState('');

  const [bluebook_file_path, setBluebook_file_path] = useState('');
  const [citizenship_file_path, setCitizenship_file_path] = useState('');
  const [policy_file_path, setPolicy_file_path] = useState('');

  const [fileLoading, setFileLoading] = useState(false);
  const [bluebookLoader, setBluebookLoader] = useState(false);
  const [citizenshipLoader, setCitizenshipLoader] = useState(false);
  const [policyLoader, setPolicyLoader] = useState(false);

  const [bluebookFile, setBluebookFile] = useState('Attach your bluebook copy');
  const [citizenshipFile, setCitizenshipFile] = useState(
    'Attach your citizenship copy'
  );
  const [receipt, setReceipt] = useState(' Attach your insurance receipt copy');

  const [admin, setAdmin] = useState(false);

  // DISPLAY TOOLTIPS
  const showTooltip = (name, type) => {
    if (type === 'bluebook') {
      const blubook = document.querySelector('.tooltip-bluebook');
      blubook.innerText = name;
    }
    if (type === 'citizenship') {
      const ctzn = document.querySelector('.tooltip-citizenship');
      ctzn.innerText = name;
    }
    if (type === 'policy') {
      const plcy = document.querySelector('.tooltip-policy');
      plcy.innerText = name;
    }
  };

  // DISPLAY Loader
  const showLoader = (type) => {
    if (type === 'bluebook') {
      setBluebookLoader(true);
    }
    if (type === 'citizenship') {
      setCitizenshipLoader(true);
    }
    if (type === 'policy') {
      setPolicyLoader(true);
    }
  };

  // SET FILE PATHS
  const setFilePaths = (path, type) => {
    if (type === 'bluebook') {
      setBluebook_file_path(`https://motor-tax.herokuapp.com/${path}`);
    }
    if (type === 'citizenship') {
      setCitizenship_file_path(`https://motor-tax.herokuapp.com/${path}`);
    }
    if (type === 'policy') {
      setPolicy_file_path(`https://motor-tax.herokuapp.com/${path}`);
    }
  };

  const uploadFileHandler = async (e, type) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('documents', file);
    showLoader(type);
    setFileLoading(true);
    try {
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      const {
        data: {
          file: { name, path },
        },
      } = await axios.post(
        `https://motor-tax.herokuapp.com/api/uploads/document`,
        formData,
        config
      );

      showTooltip(name, type);

      // ASSIGN NAME
      if (e.target.id === 'citizenship-file') {
        setCitizenshipFile('doc...');
      }
      if (e.target.id === 'receipt-file') {
        setReceipt('doc...');
      }
      if (e.target.id === 'bluebook-file') {
        setBluebookFile('doc...');
      }
      setBluebookLoader(false);
      setCitizenshipLoader(false);
      setPolicyLoader(false);

      // SAVE FILE PATH IN filePath
      setFilePaths(path, type);
    } catch (error) {
      setFileLoading(false);
      console.error(`Error occured: ${error}`);
    }
  };

  //CHECK PASSWORD
  const verifyPassword = password === confirmPassword ? true : false;

  // FORM SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();

    if (!verifyPassword) {
      const confirmPass = document.getElementById('confirm-password');
      confirmPass.focus();
      return;
    }

    if (admin) {
      dispatch(
        createAdminUser({
          firstname,
          lastname,
          contact,
          email,
          username,
          password,
        })
      );
      history.push({
        pathname: '/login',
        state: {
          email: adminSignupResponse.adminCreated.email,
          password: adminSignupResponse.adminCreated.password,
          admin: true,
        },
      });
    } else {
      dispatch(
        createTaxpayerAcc({
          taxpayer_name: taxpayerName,
          bluebook_number: bluebookNumber,
          vehicle_number: vehicleNumber,
          policy_number: policyNum,
          lastTaxPaidDate: lastTaxPaidDate,
          taxAmount: taxAmtPaid,
          province,
          lot,
          type: vehicleType,
          engine_cc: engineCC,
          registered_date: vehicleRegisteredDate,
          contact,
          email,
          username,
          password,
          bluebook_file_path,
          citizenship_file_path,
          policy_file_path,
        })
      );
      history.push({
        pathname: '/login',
        state: {
          email: taxpayerSignupResponse.taxpayerCreated.email,
          password: taxpayerSignupResponse.taxpayerCreated.password,
        },
      });
    }
  };

  return (
    <section className='signup-container' id='signup-container'>
      <h1 className='heading-1 signup-heading'>
        {admin ? 'Admin' : 'Taxpayer'} &ndash; Sign Up
      </h1>
      <section className='admin-switch-container'>
        {' '}
        <p className='admin-switch-text'>Admin</p>
        <section className='admin-switch' onClick={() => setAdmin(!admin)}>
          {admin ? (
            <section
              className='admin-switch-btn admin-switch-btn--on'
              onClick={() => setAdmin(!admin)}
              id='btn-switch-taxpayer'
            ></section>
          ) : (
            <section
              className='admin-switch-btn admin-switch-btn--off'
              onClick={() => setAdmin(!admin)}
              id='btn-switch-admin'
            >
              &nbsp;
            </section>
          )}
        </section>
        {/* <p className='admin-switch-text'>Taxpayer</p> */}
      </section>
      <form className='' onSubmit={(e) => submitHandler(e)}>
        {admin ? (
          <section className='sign-up-text-box admin-signup-text-box'>
            <InputTextField
              value={firstname}
              setValue={setFirstname}
              idValue='admin-firstname'
              classValue='input--text'
              labelName='Firstname'
            />
            <InputTextField
              value={lastname}
              setValue={setLastname}
              idValue='admin-lastname'
              classValue='input--text'
              labelName='Lastname'
            />
          </section>
        ) : (
          <section className='sign-up-text-box taxpayer-signup-text-box'>
            <InputTextField
              value={taxpayerName}
              setValue={setTaxpayerName}
              idValue='taxpayer-name'
              classValue='input--text'
              labelName='Taxpayer Name'
            />
            <InputTextField
              value={bluebookNumber}
              setValue={setBluebookNumber}
              idValue='bluebook-number'
              classValue='input--text'
              labelName='Bluebook Number'
            />
            <InputTextField
              value={vehicleNumber}
              setValue={setVehicleNumber}
              idValue='vehicle-number'
              classValue='input--text'
              labelName='Vehicle Number'
            />
            <InputTextField
              value={province}
              setValue={setProvince}
              idValue='province'
              classValue='input--text'
              labelName='Province'
            />
            <InputTextField
              value={lot}
              setValue={setLot}
              idValue='lot'
              classValue='input--text'
              labelName='Lot'
              inputType='Number'
            />
            <InputTextField
              value={vehicleType}
              setValue={setVehicleType}
              idValue='vehicle-type'
              classValue='input--text'
              labelName='Vehicle Type'
            />
            <InputTextField
              value={engineCC}
              setValue={setEngineCC}
              idValue='engine-cc'
              classValue='input--text'
              labelName='Engine (in CC)'
              inputType='Number'
            />
            <InputTextField
              value={vehicleRegisteredDate}
              setValue={setVehicleRegisteredDate}
              idValue='vehicle-registered-date'
              classValue='input--text'
              labelName='Vehicle Registered Date'
              inputType='date'
            />
          </section>
        )}
        <section className='sign-up-text-box common-text-box'>
          <InputTextField
            value={contact}
            setValue={setContact}
            idValue='contact'
            classValue='input--text'
            labelName='Contact'
          />
          <InputTextField
            value={email}
            setValue={setEmail}
            idValue='email'
            classValue='input--text'
            labelName='Email'
            inputType='email'
          />
          <InputTextField
            value={username}
            setValue={setUsername}
            idValue='username'
            classValue='input--text'
            labelName='Username'
          />
          <InputTextField
            value={password}
            setValue={setPassword}
            idValue='password'
            classValue='input--text'
            labelName='Password'
            inputType='password'
          />
          <InputTextField
            value={confirmPassword}
            setValue={setConfirmPassword}
            idValue='confirm-password'
            classValue='input--text'
            labelName='Confirm Password'
            inputType='password'
          />
        </section>
        {!admin && (
          <section className='tax-details'>
            <h5 className='heading-5 tax-record-heading'>Tax record details</h5>{' '}
            <section className='sign-up-text-box taxrecords-text-box'>
              <InputTextField
                value={lastTaxPaidDate}
                setValue={setLastTaxPaidDate}
                idValue='last-tax-paid-date'
                classValue='input--text'
                labelName='Last Tax paid on'
                inputType='date'
              />
              <InputTextField
                value={policyNum}
                setValue={setPolicyNum}
                idValue='policy-number'
                classValue='input--text'
                labelName='Policy Number'
              />
              <InputTextField
                value={taxAmtPaid}
                setValue={setTaxAmtPaid}
                idValue='tax-amount-paid'
                classValue='input--text'
                labelName='Tax Amount Paid'
              />
            </section>
          </section>
        )}
        {!admin && (
          <section className='file-box sign-up-filebox'>
            <section className='input--file'>
              <BiLinkAlt className='file-icon' />{' '}
              <label
                htmlFor='bluebook-file'
                className='label-file label-bluebook'
              >
                {bluebookFile}
              </label>
              {bluebookLoader && (
                <VscLoading className='loader loader-bluebook' />
              )}
              {fileLoading && (
                <section className='tooltip-box'>
                  <span className='tooltip tooltip-bluebook'>
                    No files attached
                  </span>
                </section>
              )}
              <input
                type='file'
                name='documents'
                onChange={(e) => uploadFileHandler(e, 'bluebook')}
                id='bluebook-file'
              />
            </section>
            <section className='input--file'>
              <BiLinkAlt className='file-icon' />{' '}
              <label
                htmlFor='citizenship-file'
                className='label-file label-citizenship'
              >
                {citizenshipFile}
              </label>{' '}
              {citizenshipLoader && (
                <VscLoading className='loader loader-citizenship' />
              )}
              {fileLoading && (
                <section className='tooltip-box'>
                  <span className='tooltip tooltip-citizenship'>
                    No files attached
                  </span>
                </section>
              )}
              <input
                type='file'
                onChange={(e) => uploadFileHandler(e, 'citizenship')}
                id='citizenship-file'
              />
            </section>

            <section className='input--file'>
              <BiLinkAlt className='file-icon' />{' '}
              <label htmlFor='receipt-file' className='label-file label-policy'>
                {receipt}
              </label>{' '}
              {policyLoader && <VscLoading className='loader loader-policy' />}
              {fileLoading && (
                <section className='tooltip-box'>
                  <span className='tooltip tooltip-policy'>
                    No files attached
                  </span>
                </section>
              )}
              <input
                type='file'
                onChange={(e) => uploadFileHandler(e, 'policy')}
                id='receipt-file'
              />
            </section>
          </section>
        )}
        <section className='submit-info signup-submit-info'>
          {admin ? (
            loadingAdmin ? (
              <Button
                text='Loading...'
                classes='btn btn--primary btn--signup'
                id='btn-signup-admin'
              />
            ) : (
              <Button
                text='Sign Up'
                classes='btn btn--primary btn--signup'
                id='btn-signup-admin'
              />
            )
          ) : loadingTaxpayer ? (
            <Button
              text='Loading...'
              classes='btn btn--primary btn--signup'
              id='btn-signup-taxpayer'
            />
          ) : (
            <Button
              text='Sign Up'
              classes='btn btn--primary btn--signup'
              id='btn-signup-taxpayer'
            />
          )}
        </section>
      </form>
      {admin
        ? !loadingAdmin &&
          errorAdmin && <MessageBar text={errorAdmin} error='true' />
        : !loadingTaxpayer &&
          errorTaxpayer && <MessageBar text={errorTaxpayer} error='true' />}

      {!verifyPassword && (
        <MessageBar
          text='Password and confirm password did not matched'
          error='true'
        />
      )}
    </section>
  );
};

export default SignUpScreen;
