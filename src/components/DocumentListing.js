import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MdCheck, MdClose } from 'react-icons/md';

import {
  adminUpdatesTaxpayer,
  getAllAdminDocs,
} from '../actions/adminDocsAction';

const DocumentListing = ({ history }) => {
  const dispatch = useDispatch();

  const [btnCheckClicked, setBtnCheckedClicked] = useState(false);
  const [btnCloseClicked, setBtnClosedClicked] = useState(false);

  const adminDocuments = useSelector((state) => state.adminDocs);
  const { loading, adminDocs } = adminDocuments;

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

  useEffect(() => {
    dispatch(getAllAdminDocs());
    if (success) dispatch(getAllAdminDocs());
  }, [dispatch, success]);

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
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default DocumentListing;
