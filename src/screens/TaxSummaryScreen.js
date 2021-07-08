import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import List from '../components/List';
import { FaFilePdf } from 'react-icons/fa';

const TaxSummaryScreen = ({ history }) => {
  return (
    <>
      <div className='payment-details-box'>
        <h1 className='heading-1'>Payment details</h1>
        <div className='payment-details'>
          <div className='taxpayer-details'>
            <h2 className='taxpayer'>Sayyed Abrar Akhtar</h2>
            <Link to='' className='download-taxpayer-details'>
              <FaFilePdf className='pdf-icon' />
            </Link>
          </div>
          <List
            title='Vehicle details'
            key1='Vehicle Number'
            value1='BA 0547'
            key2='Vehicle Brand'
            value2='Nepal Bike'
            key3='Vehicle Type'
            value3='Motor Bike'
            key4='Engine Displacement Measure'
            value4='1200 CC'
            key5='Province'
            value5='Bagmati'
          />
          <List
            title='Tax charges'
            key1='Tax amount'
            value1={`NPR. 5000`}
            key2='Tax overdue'
            value2={`NPR. 3000`}
            key3='Penalty on overdue'
            value3={`NPR. 1000`}
            key4='Polluting vehicle charge'
            value4={`NPR. 5000`}
            key5='Total amount to pay'
            value5={`NPR. 14000`}
          />
        </div>
        <Link to='/payment-success' className='btn--pay'>
          <Button text='pay' />
        </Link>
      </div>
    </>
  );
};

export default TaxSummaryScreen;
