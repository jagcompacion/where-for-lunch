import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Price.css';

export default class Price extends PureComponent {
  static propTypes = {
    price: PropTypes.string,
    onChange: PropTypes.func,
  };

  handleOnChangeAction = (e) => {
    const { price } = this.props;
    const value = price.length ? price.split(',') : [];
    const index = value.indexOf(e);
    if (index > -1) value.splice(index, 1);
    else value.push(e);
    this.props.onChange(value.toString());
  }

  render() {
    const { price } = this.props;
    const value = price.split(',');
    const options = ['$', '$$', '$$$', '$$$$'];
    return (
      <div className={styles.root}>
        <div>price range:</div>
        <div>
          {options.map((item, index) => (
            <span key={item}>
              <input type="checkbox" onChange={() => this.handleOnChangeAction((index + 1).toString())} checked={value.includes((index + 1).toString())}></input>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
