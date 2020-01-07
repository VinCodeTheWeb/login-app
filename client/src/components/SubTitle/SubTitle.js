import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ text }) => <h3 className="subtitle">{text}</h3>;

SubTitle.defaultProps = {
  text: ''
};

SubTitle.propTypes = {
  text: PropTypes.string
};

export default SubTitle;
