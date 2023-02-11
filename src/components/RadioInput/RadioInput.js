import React from 'react';

const RadioInput = ({ label, name, value, ...delegated }) => {
  console.debug('Radio Input Rendered');
  return (
    <label htmlFor={`${name}-${label}`}>
      <input
        {...delegated}
        id={`${name}-${label}`}
        type='radio'
        name={name}
        value={value}
      />
      {label}
    </label>
  );
};

export default React.memo(RadioInput);
