import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import styles from './GoogleMap.css';
import GoogleMapLabel from '../GoogleMapLabel/GoogleMapLabel';

const GoogleMap = ({ coordinates }) => {
  return (
    <div className={styles.googleMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDkvkbyZBmDbAvd_NWz5Izd1-zt6dIlFLw' }}
        defaultCenter={coordinates}
        defaultZoom={17}
      >
        <GoogleMapLabel
          {...coordinates}
          text="Here"
        />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  coordinates: PropTypes.object,
};

export default GoogleMap;
