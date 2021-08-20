import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAdminAccount } from '../actions/adminAction';
import Dialog from '../components/Dialog';
import DocumentListing from '../components/DocumentListing';
import Profile from '../components/Profile';
import Switch from '../components/Switch';
import Top from '../components/Top';
import {
  ADMIN_LOGIN_RESET,
  ADMIN_SIGNUP_RESET,
} from '../constants/adminConstants';

const AdminScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [taxpayer, setTaxpayer] = useState(true);
  const [insuranceCompany, setInsuranceCompany] = useState(false);
  const [docs, setDocs] = useState(false);
  const [logoutStatus, setLogoutStatus] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const adminRes = useSelector((state) => state.adminLogin);
  const { loginResponse } = adminRes;

  const deleteRes = useSelector((state) => state.adminLogin);
  const { loading, deleteResponse, error } = deleteRes;

  useEffect(() => {
    if (loginResponse.adminUser === undefined) {
      history.push('/login');
    }
    if (logoutStatus) {
      localStorage.removeItem('adminprofileinfo');
      dispatch({ type: ADMIN_LOGIN_RESET });
      dispatch({ type: ADMIN_SIGNUP_RESET });
      history.push('/');
      window.location.reload();
    }

    if (deleted) {
      if (window.confirm('Are you sure you want to delete?')) {
        dispatch(deleteAdminAccount(loginResponse.adminUser));
        setShowDialog(true);

        const setTimer = setTimeout(() => {
          setDeleted(false);
          setLogoutStatus(true);
        }, 1300);

        return () => clearTimeout(setTimer);
      } else {
        setDeleted(false);
      }
    }
  }, [
    loginResponse,
    history,
    dispatch,
    logoutStatus,
    deleted,
    loading,
    error,
    deleteResponse,
  ]);

  return (
    <>
      {showDialog && <Dialog type='error' text='Account deleted' />}

      <section className='admin-container'>
        {loginResponse.adminUser && (
          <Profile
            profileData={loginResponse.adminUser}
            setLogoutStatusValue={setLogoutStatus}
            setDeletedValue={setDeleted}
          />
        )}

        <section className='admin-options'>
          <section className='event-container'>
            <section className='switch-event'>
              <Switch
                value={docs}
                setValue={setDocs}
                text='Docs'
                classname='left'
              />
            </section>
          </section>

          {docs && (
            <>
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
              <h2 className='heading-5 taxpayer-docs' id='taxpayer-documents'>
                {taxpayer && 'Taxpayer Documents'}
                {insuranceCompany && 'Insurance Company Documents'}
              </h2>
              {taxpayer && (
                <DocumentListing history={history} taxpayer={taxpayer} />
              )}
              {insuranceCompany && (
                <DocumentListing
                  history={history}
                  insuranceCompany={insuranceCompany}
                />
              )}{' '}
              <Top />
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default AdminScreen;
