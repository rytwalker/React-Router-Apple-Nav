import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return (
    <NavLink to={`${props.link}`} className="NavItem">
      {props.item}
    </NavLink>
  );
};

export default NavItem;
