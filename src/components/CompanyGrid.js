import React, { useEffect } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { getLatestInsuranceCompanies } from '../actions/insuranceAction';
import MessageBar from './MessageBar';

const CompanyGrid = () => {
  const dispatch = useDispatch();

  const insuranceData = useSelector((state) => state.latestInsurance);
  const { loading, insuranceCompanies, error } = insuranceData;

  useEffect(() => {
    dispatch(getLatestInsuranceCompanies());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <MessageBar error={true} text={error} />
      ) : loading ? (
        <section className='company-grid-container'>
          <section className='company-grid'>
            <section className='grid grid-loader grid-1'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-2'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-3'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-4'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-5'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-6'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-7'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-8'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-9'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-10'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-11'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-12'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-13'>
              <VscLoading className='loader loader-general' />
            </section>
            <section className='grid grid-loader grid-14'>
              <VscLoading className='loader loader-general' />
            </section>
          </section>
        </section>
      ) : (
        insuranceCompanies && (
          <section className='company-grid-container'>
            <section className='company-grid'>
              {insuranceCompanies.map((item, index) => (
                <section
                  className={`grid grid-company grid-${index + 1}`}
                  key={index}
                >
                  <section className='company-container'>
                    {item.insurance_company.split(' ').map((i, counter) => (
                      <p className={`company company-${counter}`} key={counter}>
                        {i}
                      </p>
                    ))}
                  </section>
                </section>
              ))}
            </section>
          </section>
        )
      )}
    </>
  );
};

export default CompanyGrid;
