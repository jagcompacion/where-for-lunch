import React from 'react';
import PropTypes from 'prop-types';
import styles from './GoogleMapLabel.css';

const GoogleMapLabel = ({ text }) => <div className={styles.googleMapLabel}>{text}</div>;

GoogleMapLabel.propTypes = {
  text: PropTypes.string,
};

export default GoogleMapLabel;
