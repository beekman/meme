import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ headerText, image, footerText }) => (
  <>
    <p>{ headerText }</p>
    <img src={ image } />
    <p>{ footerText }</p>
  </>
);

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Display;
