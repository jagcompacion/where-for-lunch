import React from 'react';
import { shallow } from 'enzyme';
import Button from 'client/components/Button/Button';
import renderer from 'react-test-renderer';

test('With Enzyme, Button component will have disable property', () => {
  const wrapper = shallow(
    <Button disabled />,
  );
  const b = wrapper.find('button').props().disabled;
  expect(b).toBe(true);
});

test('With Enzyme, Button component will not have disable property', () => {
  const wrapper = shallow(
    <Button />,
  );
  const b = wrapper.find('button').props().disabled;
  expect(b).toBe(undefined);
});

test('With Jest snapshot, Button component renders with disable property', () => {
  const b = renderer
    .create(<Button disabled />)
    .toJSON();
  expect(b).toMatchSnapshot();
});
