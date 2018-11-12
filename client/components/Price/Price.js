import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Price extends Component {
  static propTypes = {
    price: PropTypes.arrayOf(PropTypes.number),
    onChange: PropTypes.func,
  };

  handleOnChangeAction = (e) => {
    const { value } = e.target;
    const { price, onChange } = this.props;
    const newPrice = price;
    const newValue = parseInt(value, 10);
    const index = price.indexOf(newValue);
    if (index > -1) newPrice.splice(index, 1);
    else newPrice.push(newValue);
    onChange(newPrice);
  }

  render() {
    const { price } = this.props;
    const options = ['$', '$$', '$$$', '$$$$'];
    return (
      <div>
        <div>price range:</div>
        <div>
          {options.map((item, index) => (
            <span key={index}>
              <input
                type="checkbox"
                value={item.length}
                onChange={this.handleOnChangeAction}
                checked={price && price.includes(item.length)}
              ></input>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    );
  }
}
