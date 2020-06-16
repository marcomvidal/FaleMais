import React from 'react';

export const Card = ({ header, children }) => (
  <div className="card">
    { header != null ? <div className="card-header">{header}</div> : '' }
    <div className="card-body">
      {children}
    </div>
  </div>
);