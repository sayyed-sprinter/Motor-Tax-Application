import React from 'react';
import CompanyForm from '../components/CompanyForm';

const InsuranceCompaniesScreen = () => {
  return (
    <section
      className='insurance-companies-container'
      id='insurance-companies-screen'
    >
      <h1 className='heading-1 heading-new-company'>New Insurance Company</h1>
      <CompanyForm />
    </section>
  );
};

export default InsuranceCompaniesScreen;
