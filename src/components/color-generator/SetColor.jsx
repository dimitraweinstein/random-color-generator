import React from 'react';
import PropTypes from 'prop-types';

const setBgColor = ({ bgColor }) => {
  const randomColor = 
    Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = '#' + randomColor;
  bgColor.innerHTML = '#ff8800';

  setInterval(() => {
    bgColor = setBgColor;
  }, 1000);

  setBgColor();

  return (
    <>
      <div style={{ background: bgColor }} />
    </>
  );
  
};

setBgColor.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default setBgColor;
