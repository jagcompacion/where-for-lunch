import React from 'react';
import PropTypes from 'prop-types';
import { tConvert, insertStr } from '../../lib/utils';
import styles from './PlaceDetails.css';

const PlaceDetails = ({ place }) => {
  let regular = null;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  if (place.hours) {
    regular = place.hours.find(item => item.hours_type === 'REGULAR');
  }
  return (
    <div className={styles.root}>
      <div className={styles.name}>{ place.name || 'Where for lunch?' }</div>
      <div className={styles.box}>
        <div className={styles.photos}>
          {
            place.photos && place.photos.map((item, index) => (
              <div key={index} className={styles.photo}>
                <img src={item} />
              </div>
            ))
          }
        </div>
        <div>Address: { place.address }</div>
        <div>Contact no: { place.phone }</div>
        <div>Category: { place.categories && place.categories.join(', ') }</div>
        <div>Price range: { place.price }</div>
        <div className={styles.ratingWrapper}>
          Ratings:{' '}
          { place.rating &&
          <div className={styles.rating}>
            <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
            <div className={styles.stars}>
              <div className={styles.emptyStars}></div>
              <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
            </div>
          </div>
          }
        </div>
        <div>Hours of operation:</div>
        {
          regular && regular.open.map((item, index) => (
            <div className={styles.operation} key={index}>{days[item.day]}: {tConvert(insertStr(item.start, '2', ':'))} - {tConvert(insertStr(item.end, '2', ':'))}</div>
          ))
        }
      </div>
    </div>
  );
};

PlaceDetails.propTypes = {
  place: PropTypes.object,
};

export default PlaceDetails;
