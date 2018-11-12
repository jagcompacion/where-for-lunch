import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ onChange, value, checked, label }) => (
  <span className={styles.root}>
    <input
      type="checkbox"
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <span>{label}</span>
  </span>
);

Checkbox.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string,
  checked: PropTypes.bool,
};


export default Checkbox;
