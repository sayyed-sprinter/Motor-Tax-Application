import React from 'react';
import { Link } from 'react-router-dom';

import { menus } from '../constants/navMenuConstants';

const Nav = ({ ulClassName, liClassName, aClassName, shouldUseLink, type }) => {
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
    </ul>
  );
};

export default Nav;
