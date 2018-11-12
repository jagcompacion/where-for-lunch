import React from 'react';
import { mount } from 'enzyme';
import Price from 'client/components/Price/Price';
import renderer from 'react-test-renderer';

test('With Enzyme, Price component will show 2 checkbox that are checked', () => {
  const price = [3, 4];
  const wrapper = mount(
    <Price price={price} />,
  );
  const b = wrapper.find({ type: 'checkbox' }).findWhere(n => n.props().checked);
  expect(b.length).toBe(2);
});

test('With Jest snapshot, Price component renders with no checkbox checked', () => {
  const b = renderer
    .create(<Price />)
    .toJSON();
  expect(b).toMatchSnapshot();
});
