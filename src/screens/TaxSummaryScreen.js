import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';
import Button from '../components/Button';
import List from '../components/List';
import { FaFilePdf } from 'react-icons/fa';

const TaxSummaryScreen = ({ history }) => {
  const record = useSelector((state) => state.taxpayer);
  const { loading, error, taxpayerinfo } = record;

  console.log(taxpayerinfo);

  return (
    <>
      {loading ? (
        <VscLoading className='loader screen-loader' />
      ) : error ? (
        <p>Error occured: {error}</p>
      ) : (
        <div className='payment-details-box'>
          <h1 className='heading-1'>Payment details</h1>
          <div className='payment-details'>
            <div className='taxpayer-details'>
              <h2 className='taxpayer'>{taxpayerinfo.taxpayer_name}</h2>
              <Link to='' className='download-taxpayer-details'>
                <FaFilePdf className='pdf-icon' />
              </Link>
            </div>
            <List
              title='Vehicle details'
              key1='Bluebook Number'
              value1={taxpayerinfo.bluebook_number}
              key2='Vehicle Number'
              value2={taxpayerinfo.vehicle_number}
              key3='Vehicle Type'
              value3={taxpayerinfo.type}
              key4='Engine Displacement Measure'
              value4={taxpayerinfo.engine_cc}
              key5='Province'
              value5={taxpayerinfo.province}
            />
            <List
              title='Tax charges'
              key1='Tax amount'
              value1={`NPR. ${taxpayerinfo.taxAmount}`}
              key2='Tax overdue'
              value2={`${taxpayerinfo.taxOverdue} ${
                taxpayerinfo.taxOverdue > 1 ? 'years' : 'year'
              }`}
              key3='Penalty on overdue'
              value3={`NPR. ${taxpayerinfo.penaltyOnOverdue}`}
              key4='Polluting vehicle charge'
              value4={`NPR. ${taxpayerinfo.pollutingCharge}`}
              key5='Total amount to pay'
              value5={`NPR. ${
                taxpayerinfo.taxAmount +
                taxpayerinfo.penaltyOnOverdue +
                taxpayerinfo.pollutingCharge
              }`}
            />
          </div>
          <Link to='/payment-success' className='btn--pay'>
            <Button text='pay' />
          </Link>
        </div>
      )}
    </>
  );
};

export default TaxSummaryScreen;