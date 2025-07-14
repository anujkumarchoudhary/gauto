import React from 'react';

const RadioButton = ({name}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer ">
      <input
        type="radio"
        name="payment"
        className='checked:bg-yellow-300'
      />
      <span>{name}</span>
    </label>
  );
};

export default RadioButton;
