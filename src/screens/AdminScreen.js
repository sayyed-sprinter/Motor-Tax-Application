import React, { useState } from 'react';
import DocumentListing from '../components/DocumentListing';

const AdminScreen = ({ history }) => {
  const [taxpayer, setTaxpayer] = useState(true);
  const [insuranceCompany, setInsuranceCompany] = useState(false);

  return (
    <>
      <section className='admin-container'>
        <section className='nav-admin-container' id='nav-admin-container'>
          <section className={`nav-admin nav-Taxpayer`}>
            {taxpayer ? (
              <p
                id={`menu-Taxpayer`}
                className='admin-menu-active'
                onClick={() => {
                  setTaxpayer(true);
                  setInsuranceCompany(false);
                }}
              >
                Taxpayer
              </p>
            ) : (
              <p
                id={`menu-Taxpayer`}
                onClick={() => {
                  setTaxpayer(true);
                  setInsuranceCompany(false);
                }}
              >
                Taxpayer
              </p>
            )}
          </section>
          <section className={`nav-admin nav-insurance-company`}>
            {insuranceCompany ? (
              <p
                id={`menu-insurance-company`}
                className='admin-menu-active'
                onClick={() => {
                  setTaxpayer(false);
                  setInsuranceCompany(true);
                }}
              >
                Insurance Company
              </p>
            ) : (
              <p
                id={`menu-insurance-company`}
                onClick={() => {
                  setTaxpayer(false);
                  setInsuranceCompany(true);
                }}
              >
                Insurance Company
              </p>
            )}
          </section>
        </section>
        <h1 className='heading-1 taxpayer-docs' id='taxpayer-documents'>
          {taxpayer && 'Taxpayer Documents'}
          {insuranceCompany && 'Insurance Company Documents'}
        </h1>

        {taxpayer && <DocumentListing history={history} taxpayer={taxpayer} />}
        {insuranceCompany && (
          <DocumentListing
            history={history}
            insuranceCompany={insuranceCompany}
          />
        )}
      </section>
    </>
  );
};

export default AdminScreen;
