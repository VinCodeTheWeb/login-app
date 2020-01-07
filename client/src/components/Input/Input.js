import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, name, placeholder, value, onChange }) => (
  <div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      required
    />
    <label className="input_label_name" for={name}>
      <span className="input_content_label_name">{label}</span>
    </label>
  </div>
);

export default Input;
