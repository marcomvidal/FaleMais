import React from 'react';

export const Jumbotron = ({ children, title, subtitle }) => (
  <div className="jumbotron">
    <h1 className="display-4">{title}</h1>
    <p className="lead">{subtitle}</p>
    <hr className="my-4" />
    {children}
  </div>
);