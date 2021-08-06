import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdCheck, MdClose } from 'react-icons/md';

import {
  adminUpdatesInsurance,
  adminUpdatesTaxpayer,
  getAllAdminDocs,
} from '../actions/adminDocsAction';
import Loader from './Loader';
import MessageBar from './MessageBar';
import { getAllInsuranceCompanies } from '../actions/insuranceAction';

const DocumentListing = ({ taxpayer, insuranceCompany }) => {
  const dispatch = useDispatch();

  const [btnCheckClicked, setBtnCheckedClicked] = useState(false);
  const [btnCloseClicked, setBtnClosedClicked] = useState(false);

  const adminDocuments = useSelector((state) => state.adminDocs);
  const { loading, error, adminDocs } = adminDocuments;

  const insComapnies = useSelector((state) => state.insurance);
  const {
    insuranceCompanies,
    loading: loadingInsCompanies,
    error: errorInsCompanies,
  } = insComapnies;

  const updatedDocs = useSelector((state) => state.adminUpdatesTaxpayer);
  const { loading: updateLoading, success } = updatedDocs;

  const verifiedClickHandler = React.useCallback(
    (msgForTaxpayer) => {
      if (btnCheckClicked) return;
      setBtnCheckedClicked(true);
      dispatch(adminUpdatesTaxpayer(msgForTaxpayer));
      if (!updateLoading && success) {
        dispatch(getAllAdminDocs());
      }
      setBtnCheckedClicked(false);
    },

    [dispatch, btnCheckClicked, updateLoading, success]
  );

  const unVerifiedClickHandler = React.useCallback(
    (msgForTaxpayer) => {
      if (btnCloseClicked) return;
      setBtnClosedClicked(true);
      dispatch(adminUpdatesTaxpayer(msgForTaxpayer));
      setBtnClosedClicked(false);
    },
    [dispatch, btnCloseClicked]
  );

  const verifiedInsClickHandler = React.useCallback(
    (msgForTaxpayer) => {
      if (btnCheckClicked) return;
      setBtnCheckedClicked(true);
      dispatch(adminUpdatesInsurance(msgForTaxpayer));
      if (!updateLoading && success) {
        dispatch(getAllAdminDocs());
      }
      setBtnCheckedClicked(false);
    },

    [dispatch, btnCheckClicked, updateLoading, success]
  );

  const unVerifiedInsClickHandler = React.useCallback(
    (msgForTaxpayer) => {
      if (btnCloseClicked) return;
      setBtnClosedClicked(true);
      dispatch(adminUpdatesInsurance(msgForTaxpayer));
      setBtnClosedClicked(false);
    },
    [dispatch, btnCloseClicked]
  );

  useEffect(() => {
    dispatch(getAllAdminDocs());

    dispatch(getAllInsuranceCompanies());
    if (success) dispatch(getAllAdminDocs());
  }, [dispatch, success]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBar text={error} error={true} />
      ) : (
        taxpayer &&
        adminDocs &&
        adminDocs.map((item, index) => (
          <section
            className='docs-list'
            key={`docs-${index}`}
            id='admin-taxpayers-docs'
          >
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
                      href={
                        doc.bluebook_file_path ? doc.bluebook_file_path : '#'
                      }
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.bluebook_file_path &&
                        doc.bluebook_file_path.split('/')[4]}
                    </a>
                  </p>
                  <p className='doc'>
                    <span>Citizenship:</span>{' '}
                    <a
                      href={
                        doc.citizenship_file_path
                          ? doc.citizenship_file_path
                          : '#'
                      }
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.citizenship_file_path &&
                        doc.citizenship_file_path.split('/')[4]}
                    </a>
                  </p>
                  <p className='doc'>
                    <span>Policy:</span>{' '}
                    <a
                      href={doc.policy_file_path ? doc.policy_file_path : '#'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.policy_file_path &&
                        doc.policy_file_path.split('/')[4]}
                    </a>
                  </p>
                </section>
              ))}

              <section className='btn-container'>
                {!item.verified ? (
                  !item.adminComment ? (
                    <>
                      <p
                        id={`btn-verify-${index}`}
                        className='btn btn--success'
                        onClick={(e) =>
                          verifiedClickHandler({
                            _id: item._id,
                            verified: true,
                          })
                        }
                      >
                        <MdCheck />
                      </p>
                      <p
                        id={`btn-error-verify-${index}`}
                        className='btn btn--error'
                        onClick={(e) =>
                          unVerifiedClickHandler({
                            _id: item._id,
                            verified: false,
                            adminComment: 'Invalid documents!!',
                          })
                        }
                      >
                        <MdClose />
                      </p>
                    </>
                  ) : (
                    <p
                      className='btn--error admin-comment'
                      id={`admin-verification-comment-${index}`}
                    >
                      {item.adminComment}
                    </p>
                  )
                ) : (
                  <p
                    className='btn--success admin-comment'
                    id={`doc-verified-${index}`}
                  >
                    verified
                  </p>
                )}
              </section>
            </section>
          </section>
        ))
      )}
      {loadingInsCompanies ? (
        <Loader />
      ) : errorInsCompanies ? (
        <MessageBar text={error} error={true} />
      ) : (
        insuranceCompany &&
        insuranceCompanies &&
        insuranceCompanies.map((item, index) => (
          <section
            className='docs-list'
            key={`docs-${index}`}
            id='admin-insurance-companies-docs'
          >
            <h3 className='heading-3 main-heading taxpayer-name'>
              {item.insurance_company}
            </h3>

            <section className='docs-details'>
              <p className='docs-date'>{item.createdAt.split('T')[0]}</p>
              {item.docs.map((doc, index) => (
                <section className='docs' key={`doc-${index}`}>
                  <p className='doc'>
                    <span>Documents</span>{' '}
                  </p>
                  <p className='doc'>
                    <span>VAT:</span>{' '}
                    <a
                      href={doc.vat_file_path ? doc.vat_file_path : '#'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.vat_file_path && doc.vat_file_path.split('/')[4]}
                    </a>
                  </p>
                  <p className='doc'>
                    <span>License:</span>{' '}
                    <a
                      href={doc.license_file_path ? doc.license_file_path : '#'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {doc.license_file_path &&
                        doc.license_file_path.split('/')[4]}
                    </a>
                  </p>
                </section>
              ))}

              <section className='btn-container'>
                {!item.verified ? (
                  !item.adminComment ? (
                    <>
                      <p
                        id={`btn-verify-${index}`}
                        className='btn btn--success'
                        onClick={(e) =>
                          verifiedInsClickHandler({
                            _id: item._id,
                            verified: true,
                          })
                        }
                      >
                        <MdCheck />
                      </p>
                      <p
                        id={`btn-error-verify-${index}`}
                        className='btn btn--error'
                        onClick={(e) =>
                          unVerifiedInsClickHandler({
                            _id: item._id,
                            verified: false,
                            adminComment: 'Invalid documents!!',
                          })
                        }
                      >
                        <MdClose />
                      </p>
                    </>
                  ) : (
                    <p
                      className='btn--error admin-comment'
                      id={`admin-verification-comment-${index}`}
                    >
                      {item.adminComment}
                    </p>
                  )
                ) : (
                  <p
                    className='btn--success admin-comment'
                    id={`doc-verified-${index}`}
                  >
                    verified
                  </p>
                )}
              </section>
            </section>
          </section>
        ))
      )}
    </>
  );
};

export default DocumentListing;
