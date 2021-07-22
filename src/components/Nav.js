import React from 'react';
import { Link } from 'react-router-dom';

import { menus } from '../constants/navMenuConstants';

const Nav = () => {
  return (
    <ul className='nav-lists'>
      {menus.map((menu) => (
        <li className='nav-item' key={menu.id} id={menu.id}>
          <Link to={menu.link} className='nav-link'>
            {menu.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
