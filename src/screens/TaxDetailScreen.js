import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaxDetails } from '../actions/taxDetailAction';
import Loader from '../components/Loader';
import MessageBar from '../components/MessageBar';
import TwoColList from '../components/TwoColList';

const TaxDetailScreen = () => {
  const dispatch = useDispatch();

  const record = useSelector((state) => state.getTaxDetails);
  const { loading, taxRates, error } = record;

  useEffect(() => {
    dispatch(getTaxDetails());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBar text={error} />
      ) : (
        <section className='tax-details-container' id='tax-details-container'>
          <h1 className='heading-1 tax-detail-heading'>Tax Details</h1>
          {taxRates.map((taxrate, index) => (
            <TwoColList
              title1='Engine (cc)'
              title2='Yearly taxes'
              item={taxrate}
              VehicleType={taxrate.type}
              key={index}
            />
          ))}
        </section>
      )}
    </>
  );
};

export default TaxDetailScreen;
