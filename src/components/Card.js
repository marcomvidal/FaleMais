import React from 'react';

export const Card = ({ header, children, className }) => {
  const classes = className != null ? `card ${className}` : 'card';

  return (
    <div className={classes}>
      {header != null ? <div className="card-header">{header}</div> : ''}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}