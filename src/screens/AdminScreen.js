import React from 'react';
import DocumentListing from '../components/DocumentListing';

const AdminScreen = () => {
  return (
    <>
      <h1 className='heading-1 taxpayer-docs'>Taxpayer Documents</h1>
      <DocumentListing />
    </>
  );
};

export default AdminScreen;
