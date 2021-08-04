import React from 'react';
import CompanyForm from '../components/CompanyForm';
// import CompanyGrid from '../components/CompanyGrid';

const InsuranceCompaniesScreen = () => {
  return (
    <section
      className='insurance-companies-container'
      id='insurance-companies-screen'
    >
      {/* <CompanyGrid /> */}

      <h1 className='heading-1 heading-new-company'>New Insurance Company</h1>

      <CompanyForm />
    </section>
  );
};

export default InsuranceCompaniesScreen;
