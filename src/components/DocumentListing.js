import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdminDocs } from '../actions/adminDocsAction';

const DocumentListing = () => {
  const dispatch = useDispatch();
  const adminDocuments = useSelector((state) => state.adminDocs);
  const { loading, adminDocs } = adminDocuments;

  console.log(adminDocs);
  useEffect(() => {
    dispatch(getAllAdminDocs());
  }, [dispatch]);

  return (
    <>
      {!loading ? (
        adminDocs &&
        adminDocs.map((item, index) => (
          <section className='docs-list' key={`docs-${index}`}>
            <h3 className='heading-3 main-heading taxpayer-name'>
              {item.taxpayer}
            </h3>

            <section className='docs-details'>
              <p className='docs-date'>{item.createdAt.split('T')[0]}</p>
              {item.docs.map((doc, index) => (
                <section className='docs' key={`doc-${index}`}>
                  <p className='doc'>
                    <span>Bluebook:</span>{' '}
                    <a
                      href={doc.bluebook_file_path}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.bluebook_file_path.split('/')[4]}
                    </a>
                  </p>
                  <p className='doc'>
                    <span>Citizenship:</span>{' '}
                    <a
                      href={doc.citizenship_file_path}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.citizenship_file_path.split('/')[4]}
                    </a>
                  </p>
                  <p className='doc'>
                    <span>Policy:</span>{' '}
                    <a
                      href={doc.policy_file_path}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.policy_file_path.split('/')[4]}
                    </a>
                  </p>
                </section>
              ))}

              <section className='btn-container'>
                <p className='btn btn--success'>Verified</p>
                <p className='btn btn--error'>Not verified</p>
              </section>
            </section>
          </section>
        ))
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default DocumentListing;
