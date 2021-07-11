import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';
import { TiArrowBack } from 'react-icons/ti';

import Button from '../components/Button';
import List from '../components/List';

import { TAXPAYER_FETCH_RESET } from '../constants/taxpayerConstants';

const TaxSummaryScreen = ({ history }) => {
  const record = useSelector((state) => state.taxpayer);
  const { loading, error, taxpayerinfo } = record;

  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch({ type: TAXPAYER_FETCH_RESET });
    history.push('/');
  };

  return (
    <>
      {loading ? (
        <VscLoading className='loader screen-loader' />
      ) : error ? (
        <p>Error occured: {error}</p>
      ) : (
        <>
          <div className='payment-details-box'>
            <h1 className='heading-1'>Payment details</h1>
            <div className='btn btn--go-back' onClick={goBackHandler}>
              <TiArrowBack className='go-back' />
            </div>
            <div className='payment-details'>
              <div className='taxpayer-details'>
                <h2 className='taxpayer'>{taxpayerinfo.taxpayer_name}</h2>
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
                key6='Last tax paid on'
                value6={`${taxpayerinfo.lastTaxPaidOn}`}
              />
              <List
                title='Tax charges'
                key1='Tax amount'
                value1={`NPR. ${taxpayerinfo.taxAmount}`}
                key2='Tax overdue period'
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

            {taxpayerinfo.taxAmount > 0 ? (
              <Link to='/payment-success' className='btn--pay'>
                <Button
                  text='pay'
                  classes='btn btn--pay btn--primary'
                  id='btn-pay-tax'
                />
              </Link>
            ) : (
              <Button
                text='Nothing to pay'
                classes='btn btn--pay btn-lg'
                disabled
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TaxSummaryScreen;
