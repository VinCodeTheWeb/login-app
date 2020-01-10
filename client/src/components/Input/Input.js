import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, name, placeholder, value, onChange }) => (
  <div className="input_container">
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
    <label className="input_label_name" htmlFor={name}>
      {label}
    </label>
  </div>
);

export default Input;
