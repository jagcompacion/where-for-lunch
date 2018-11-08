import React from 'react';
import { shallow } from 'enzyme';
import Price from 'client/components/Price/Price';
import renderer from 'react-test-renderer';

test('With Enzyme, Price component will show 3 checks', () => {
  const price = '3,4';
  const wrapper = shallow(
    <Price price={price} />,
  );
  let total = 0;
  const b = wrapper.find({ type: 'checkbox' });
  b.map((item) => {
    if (item.props().checked) total += 1;
    return false;
  });
  expect(total).toBe(2);
});

test('With Jest snapshot, Button component renders with disable property', () => {
  const price = '3,4';
  const b = renderer
    .create(<Price price={price} />)
    .toJSON();
  expect(b).toMatchSnapshot();
});
