import React from 'react';

export const NavLink = (props) => (
  <li class="nav-item">
    <a class="nav-link" href={props.link.url}>{props.link.label}</a>
  </li>
);