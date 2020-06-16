import React from 'react';

export const NavLink = ({ link }) => (
  <li className="nav-item">
    <a className="nav-link" href={link.url}>{link.label}</a>
  </li>
);