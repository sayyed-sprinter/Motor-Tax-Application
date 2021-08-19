import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { menus } from '../constants/navMenuConstants';

const Nav = ({ ulClassName, liClassName, aClassName, shouldUseLink, type }) => {
  const taxpayerRes = useSelector((state) => state.taxpayerLogin);
  const {
    loading: loadingTaxpayer,
    loginResponse: taxpayerLoginResponse,
    error: errorTaxpayer,
  } = taxpayerRes;

  const adminRes = useSelector((state) => state.adminLogin);
  const {
    loading: loadingAdmin,
    loginResponse: adminLoginResponse,
    error: errorAdmin,
  } = adminRes;

  const [adminData, setAdminData] = useState(false);
  const [taxpayerData, setTaxpayerData] = useState(false);

  useEffect(() => {
    if (
      !loadingTaxpayer &&
      !errorTaxpayer &&
      taxpayerLoginResponse !== undefined &&
      taxpayerLoginResponse.taxpayer !== undefined
    ) {
      setTaxpayerData(true);
    }

    if (
      !loadingAdmin &&
      !errorAdmin &&
      adminLoginResponse !== undefined &&
      adminLoginResponse.adminUser !== undefined
    ) {
      setAdminData(true);
    }
  }, [
    taxpayerData,
    loadingTaxpayer,
    errorTaxpayer,
    taxpayerLoginResponse,
    loadingAdmin,
    errorAdmin,
    adminLoginResponse,
  ]);

  return (
    <ul className={ulClassName}>
      {menus.map((menu) => (
        <li className={liClassName} key={menu.id}>
          {shouldUseLink ? (
            <Link
              to={menu.link}
              className={aClassName}
              id={type ? `${type}-${menu.id}` : menu.id}
            >
              {menu.text}
            </Link>
          ) : (
            <a
              href={menu.link}
              className={aClassName}
              id={type ? `${type}-${menu.id}` : menu.id}
            >
              {menu.text}
            </a>
          )}
        </li>
      ))}

      {adminData ? (
        <li className='nav-item'>
          <a
            href='/admin'
            className={type ? 'hamburger-bar__link' : 'nav-link'}
            id={type ? `${type}-nav-admin` : 'nav-admin'}
          >
            {adminLoginResponse.adminUser !== undefined &&
              adminLoginResponse.adminUser.lastname}
          </a>
        </li>
      ) : taxpayerData ? (
        <li className='nav-item'>
          <a
            href={`/profile/${taxpayerLoginResponse.taxpayer.bluebook_number}`}
            className={type ? 'hamburger-bar__link' : 'nav-link'}
            id={type ? `${type}-nav-taxpayer` : 'nav-taxpayer'}
          >
            {taxpayerLoginResponse.taxpayer !== undefined &&
              taxpayerLoginResponse.taxpayer.taxpayer_name.split(' ')[0]}
          </a>
        </li>
      ) : (
        <li className='nav-item'>
          <a
            href='/login'
            className={type ? 'hamburger-bar__link' : 'nav-link'}
            id={type ? `${type}-nav-login` : 'nav-login'}
          >
            Login
          </a>
        </li>
      )}
    </ul>
  );
};

export default Nav;
