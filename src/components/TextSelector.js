import React from 'react';
import PropTypes from 'prop-types';

const TextSelector = ({ headerText, image, footerText, onChange }) => (
  <>
    <input type="text" name="headerText" value={ headerText } onChange={ onChange } />
    <input type="text" name="image" value={ image } onChange={ onChange } />
    <input type="text" name="footerText" value={ footerText } onChange={ onChange } />
  </>
);

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextSelector;
