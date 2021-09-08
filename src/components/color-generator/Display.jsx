import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgColor }) => {
  return <div style={{ background: bgColor }}>{bgColor}</div>;
};

Display.propTypes = {
  bgColor: PropTypes.string.isRequired
};

export default Display;

