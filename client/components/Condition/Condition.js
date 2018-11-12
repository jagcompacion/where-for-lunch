import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Price from 'components/Price/Price';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    onRadiusChange: PropTypes.func.isRequired,
    onPriceChange: PropTypes.func.isRequired,
  };

  handleOnBlurAction = (e) => {
    const { value: radius } = e.target;
    this.props.onRadiusChange(radius);
  }

  handleOnChangeAction = (price) => {
    this.props.onPriceChange(price);
  }

  render() {
    const { condition: { radius, price } } = this.props;
    return (
      <div>
        <div className={styles.radius}>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
          <span>meters</span>
        </div>
        <Price price={price} onChange={this.handleOnChangeAction} />
      </div>
    );
  }
}

