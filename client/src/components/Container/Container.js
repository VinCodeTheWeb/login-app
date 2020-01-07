import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ width, height, children, rest }) => (
  <div className="container" style={{ width, height, ...rest }}>
    {children}
  </div>
);

Container.defaultProps = {
  width: '100%',
  height: '100vh'
};

Container.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default Container;
