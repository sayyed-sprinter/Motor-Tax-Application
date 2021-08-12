import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLatestInsuranceCompanies } from '../actions/insuranceAction';
import CompanyForm from '../components/CompanyForm';
// import CompanyGrid from '../components/CompanyGrid';

const InsuranceCompaniesScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestInsuranceCompanies());
  }, [dispatch]);

  return (
    <section
      className='insurance-companies-container'
      id='insurance-companies-screen'
    >
      {/* <CompanyGrid /> */}

      {/* implement useselector */}

      <h1 className='heading-1 heading-new-company'>New Insurance Company</h1>

      <CompanyForm />
    </section>
  );
};

export default InsuranceCompaniesScreen;
