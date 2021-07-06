import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import InputSelect from './InputSelect';
import InputText from './InputText';
import InputFile from './InputFile';
import Button from './Button';

const Form = () => {
  const [taxPaid, setTaxPaid] = useState(true);

  useEffect(() => {
    console.log(taxPaid);
  }, [taxPaid]);

  const submitHandler = () => {
    // form submit handler
    // check if have to submit insurance form or tax form
    //
  };

  return (
    <div className='form--pay-tax'>
      <h1 className='heading-1'>Pay Your Tax</h1>
      <form action='' className='form--grid' onSubmit={submitHandler}>
        <div className='text-box'>
          <InputText label='Vehicle number' labelFor='vehicle-number' />
          <InputText label='Bluebook number' labelFor='bluebook-number' />
          <InputText label='Engine displacement (in cc)' labelFor='engine-cc' />
          {taxPaid ? (
            <InputText
              label='Insurance policy number'
              labelFor='insurance-number'
            />
          ) : (
            <InputSelect
              label='Select insurance policy'
              labelFor='select-policy'
            />
          )}
        </div>
        <div className='file-box'>
          <InputFile
            label='Attach your bluebook copy'
            labelFor='bluebook-file '
          />
          <InputFile
            label='Attach your citizenship copy'
            labelFor='citizenship-file '
          />
          <InputFile
            label='Attach your insurance receipt copy'
            labelFor='receipt-file '
          />
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
          )}
          {/* {taxPaid ? (
            <Button text='continue' />
          ) : (
            <Button text='pay' onClick={() => setTaxPaid(!taxPaid)} />
          )} */}
          <Button text='continue' />
        </div>
      </form>
    </div>
  );
};

export default Form;
