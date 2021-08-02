import React from 'react';
import DocumentListing from '../components/DocumentListing';

const AdminScreen = ({ history }) => {
  return (
    <section className='admin-container'>
      <h1 className='heading-1 taxpayer-docs' id='taxpayer-documents'>
        Taxpayer Documents
      </h1>

      <DocumentListing history={history} />
    </section>
  );
};

export default AdminScreen;
