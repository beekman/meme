import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const TextSelector = ({ headerText, image, footerText, onChange }) => (
  <div className={ styles.TextSelector }>
    <label>Image: <input type="text" name="image" value={ image } onChange={ onChange } /></label>
    <label>Header Text: <input type="text" name="headerText" value={ headerText } onChange={ onChange } /></label>
    <label>Footer Text: <input type="text" name="footerText" value={ footerText } onChange={ onChange } /></label>
  </div>
);

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default TextSelector;
