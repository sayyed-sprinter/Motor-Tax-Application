import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiLinkAlt } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';
import Button from './Button';
import { fetchTaxpayerDetails } from '../actions/taxpayerActions';

const Form = ({ history }) => {
  let file_path = '';

  const [taxPaid, setTaxPaid] = useState(true);
  const [vehicle_number, setVehicle_number] = useState('');
  const [bluebook_number, setBluebook_number] = useState('');
  const [engine_cc, setEngine_cc] = useState('');
  const [policy_number, setPolicy_number] = useState('');
  const [insuranceAgent, setInsuranceAgent] = useState('');
  const [fileLoading, setFileLoading] = useState(false);
  const [bluebookLoader, setBluebookLoader] = useState(false);
  const [citizenshipLoader, setCitizenshipLoader] = useState(false);
  const [policyLoader, setPolicyLoader] = useState(false);

  const [bluebookFile, setBluebookFile] = useState('Attach your bluebook copy');
  const [citizenshipFile, setCitizenshipFile] = useState(
    'Attach your citizenship copy'
  );
  const [receipt, setReceipt] = useState(' Attach your insurance receipt copy');

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

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(taxPaid);
  }, [taxPaid]);

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
          file: { name },
          path,
        },
      } = await axios.post(
        `http://localhost:3000/api/uploads/document`,
        formData,
        config
      );

      // SAVE FILE PATH IN filePath
      file_path = `https://motor-tax.herokuapp.com/${path}`;
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
    } catch (error) {
      setFileLoading(false);
      console.error(`Error occured: ${error}`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      fetchTaxpayerDetails({
        vehicle_number,
        bluebook_number,
        engine_cc,
        policy_number,
        file_path,
      })
    );
    history.push('/tax-summary');
  };

  return (
    <div className='form--pay-tax'>
      <h1 className='heading-1'>Pay Your Tax</h1>
      <form action='' className='form--grid' onSubmit={submitHandler}>
        <div className='text-box'>
          <div className='input--text'>
            <label className='label' htmlFor='vehicle-number'>
              Vehicle number
            </label>
            <input
              type='text'
              id='vehicle-number'
              name='vehicle-number'
              required
              value={vehicle_number}
              onChange={(e) => setVehicle_number(e.target.value)}
            ></input>
          </div>

          <div className='input--text'>
            <label className='label' htmlFor='bluebook-number'>
              Bluebook number
            </label>
            <input
              type='text'
              id='bluebook-number'
              name='bluebook-number'
              required
              value={bluebook_number}
              onChange={(e) => setBluebook_number(e.target.value)}
            ></input>
          </div>

          <div className='input--text'>
            <label className='label' htmlFor='engine-cc'>
              Engine displacement (in cc)
            </label>
            <input
              type='number'
              id='engine-cc'
              name='engine-cc'
              required
              value={engine_cc}
              onChange={(e) => setEngine_cc(e.target.value)}
            ></input>
          </div>
          {taxPaid ? (
            <div className='input--text'>
              <label className='label' htmlFor='insurance-number'>
                Insurance policy number
              </label>
              <input
                type='text'
                id='insurance-number'
                name='insurance-number'
                required
                value={policy_number}
                onChange={(e) => setPolicy_number(e.target.value)}
              ></input>
            </div>
          ) : (
            <div className='input--text'>
              <label className='label' htmlFor='select-policy'>
                Select insurance policy
              </label>
              <select
                id='select-policy'
                name='select-policy'
                value={insuranceAgent}
                onChange={(e) => setInsuranceAgent(e.target.value)}
              >
                <option>New Co</option>
              </select>
            </div>
          )}
        </div>
        <div className='file-box'>
          <div className='input--file'>
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
              <div className='tooltip-box'>
                <span className='tooltip tooltip-bluebook'>
                  No files attached
                </span>
              </div>
            )}
            <input
              type='file'
              name='documents'
              onChange={(e) => uploadFileHandler(e, 'bluebook')}
              id='bluebook-file'
            />
          </div>
          <div className='input--file'>
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
              <div className='tooltip-box'>
                <span className='tooltip tooltip-citizenship'>
                  No files attached
                </span>
              </div>
            )}
            <input
              type='file'
              onChange={(e) => uploadFileHandler(e, 'citizenship')}
              id='citizenship-file'
            />
          </div>

          {taxPaid && (
            <div className='input--file'>
              <BiLinkAlt className='file-icon' />{' '}
              <label htmlFor='receipt-file' className='label-file label-policy'>
                {receipt}
              </label>{' '}
              {policyLoader && <VscLoading className='loader loader-policy' />}
              {fileLoading && (
                <div className='tooltip-box'>
                  <span className='tooltip tooltip-policy'>
                    No files attached
                  </span>
                </div>
              )}
              <input
                type='file'
                onChange={(e) => uploadFileHandler(e, 'policy')}
                id='receipt-file'
              />
            </div>
          )}
        </div>
        <div className='submit-info'>
          {taxPaid && (
            <p className='no-policy'>
              {' '}
              Not paid Insurance? &nbsp;
              <Link
                to='#'
                className='link-primary'
                onClick={() => setTaxPaid(!taxPaid)}
              >
                Pay here
              </Link>
            </p>
          )}{' '}
          {taxPaid ? (
            <Button text='continue' />
          ) : (
            <Button text='pay' onClick={() => setTaxPaid(!taxPaid)} />
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
