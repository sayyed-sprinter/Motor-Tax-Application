import React from 'react';

import { Link } from 'react-router-dom';
import InputSelect from './InputSelect';
import InputText from './InputText';
import InputFile from './InputFile';
import Button from './Button';

const Form = ({ pay }) => {
  return (
    <div className='form--pay-tax'>
      <h1 className='heading-1'>Pay Your Tax</h1>
      <form action='' className='form--grid'>
        <div className='text-box'>
          <InputText label='Vehicle number' labelFor='vehicle-number' />
          <InputText label='Bluebook number' labelFor='bluebook-number' />
          <InputText label='Engine displacement (in cc)' labelFor='engine-cc' />
          {pay === 'tax' ? (
            <InputText
              label='Insurance policy number'
              labelFor='insurance-number'
            />
          ) : (
            <InputSelect />
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
          {pay === 'tax' && (
            <p className='no-policy'>
              {' '}
              Not paid Insurance? &nbsp;
              <Link to='#' className='link-primary'>
                Pay here
              </Link>
            </p>
          )}

          <Button text='continue' />
        </div>
      </form>
    </div>
  );
};

export default Form;
