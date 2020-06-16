import React from 'react';

export const InputContainer = ({ className, label, children }) => (
  <div className={className}>
    <label>{label}</label>
    {children}
  </div>
);