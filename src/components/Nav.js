import React from 'react';
import { Link } from 'react-router-dom';

import { menus } from '../constants/navMenuConstants';

const Nav = ({ ulClassName, liClassName, aClassName, shouldUseLink }) => {
  return (
    <ul className={ulClassName}>
      {menus.map((menu) => (
        <li className={liClassName} key={menu.id} id={menu.id}>
          {shouldUseLink ? (
            <Link to={menu.link} className={aClassName}>
              {menu.text}
            </Link>
          ) : (
            <a href={menu.link} className={aClassName}>
              {menu.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
