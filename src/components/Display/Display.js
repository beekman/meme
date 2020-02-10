import React from 'react';
import PropTypes from 'prop-types';
import styles from '../App.css';

const Display = ({ headerText, image, footerText }) => (
  <div className={ styles.Display }>

    <img src={ image } />
    <p className={ styles.headerText }>{ headerText }</p>
    <p className={ styles.footerText }>{ footerText }</p>

  </div>
);

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Display;
