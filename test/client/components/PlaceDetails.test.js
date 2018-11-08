import React from 'react';
import { shallow } from 'enzyme';
import PlaceDetails from 'client/components/PlaceDetails/PlaceDetails';
import renderer from 'react-test-renderer';

test('With Enzyme, PlaceDetails component not render rating section when no rating passed over', () => {
  const place = { hehe: 'haha' };
  const wrapper = shallow(
    <PlaceDetails place={place} />,
  );
  const p = wrapper.find('.rating');
  expect(p.length).toBe(0);
});

test('With Enzyme, PlaceDetails component show have 3 photos displayed', () => {
  const place = {
    photos: [
      'http://image1.jpg',
      'http://image2.jpg',
      'http://image2.jpg',
    ],
  };
  const wrapper = shallow(
    <PlaceDetails place={place} />,
  );
  const p = wrapper.find('.photo');
  expect(p.length).toBe(3);
});

test('With Enzyme, PlaceDetails component show have 3 operation hours displayed', () => {
  const place = {
    hours: [
      {
        hours_type: 'REGULAR',
        open: [
          {
            is_overnight: false,
            end: '2200',
            day: 0,
            start: '1730',
          },
          {
            is_overnight: false,
            end: '2200',
            day: 1,
            start: '1730',
          },
          {
            is_overnight: false,
            end: '2200',
            day: 2,
            start: '1730',
          },
        ],
      },
    ],
  };
  const wrapper = shallow(
    <PlaceDetails place={place} />,
  );
  const p = wrapper.find('.operation');
  expect(p.length).toBe(3);
});

test('With Jest snapshot, PlaceDetails component renders rating section when present', () => {
  const place = { hehe: 'haha', rating: 3.5 };
  const placeComponent = renderer
    .create(<PlaceDetails place={place} />)
    .toJSON();
  expect(placeComponent).toMatchSnapshot();
});
