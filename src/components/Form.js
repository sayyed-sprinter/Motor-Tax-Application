import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiLinkAlt } from 'react-icons/bi';
import Button from './Button';
import { fetchTaxpayerDetails } from '../actions/taxpayerActions';

const Form = ({ history }) => {
  const [taxPaid, setTaxPaid] = useState(true);
  const [vehicle_number, setVehicle_number] = useState('');
  const [bluebook_number, setBluebook_number] = useState('');
  const [engine_cc, setEngine_cc] = useState('');
  const [policy_number, setPolicy_number] = useState('');
  const [insuranceAgent, setInsuranceAgent] = useState('');

  const [bluebookFile, setBluebookFile] = useState('Attach your bluebook copy');
  const [citizenshipFile, setCitizenshipFile] = useState(
    'Attach your citizenship copy'
  );
  const [receipt, setReceipt] = useState(' Attach your insurance receipt copy');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(taxPaid);
  }, [taxPaid]);

  const uploadFileHandler = async (e) => {
    // const file = e.target.files[0];
    // const formData = new FormData();
    // formData.append('documents', file);

    // try {
    //   const config = {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    //   };

    //   const { data } = await axios.post(
    //     `https://motor-tax.herokuapp.com/api/uploads/document`,
    //     formData,
    //     config
    //   );

    const data = new FormData();
    data.append('file', e.target.files[0]);

    axios
      .post('https://motor-tax.herokuapp.com/api/uploads/document', data)
      .then((res) => {
        console.log(res.data);
      });

    if (e.target.id === 'citizenship-file') {
      setCitizenshipFile('hi');
    }
    if (e.target.id === 'receipt-file') {
      setReceipt('ho');
    }
    if (e.target.id === 'bluebook-file') {
      setBluebookFile('he');
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
            <label htmlFor='bluebook-file' className='label-file'>
              {bluebookFile}
            </label>{' '}
            <input
              type='file'
              name='documents'
              onChange={uploadFileHandler}
              id='bluebook-file'
            />
          </div>
          <div className='input--file'>
            <BiLinkAlt className='file-icon' />{' '}
            <label htmlFor='citizenship-file' className='label-file'>
              {citizenshipFile}
            </label>{' '}
            <input
              type='file'
              name='documents'
              onChange={uploadFileHandler}
              id='citizenship-file'
            />
          </div>

          {!taxPaid ? (
            <div className='input--file hidden'>
              <BiLinkAlt className='file-icon' />{' '}
              <label htmlFor='receipt-file' className='label-file'>
                {receipt}
              </label>{' '}
              <input
                type='file'
                name='documents'
                onChange={uploadFileHandler}
                id='receipt-file'
              />
            </div>
          ) : (
            <div className='input--file'>
              <BiLinkAlt className='file-icon' />{' '}
              <label htmlFor='receipt-file' className='label-file'>
                {receipt}
              </label>{' '}
              <input
                type='file'
                name='documents'
                onChange={uploadFileHandler}
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
                //onClick={() => setTaxPaid(!taxPaid)}
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
