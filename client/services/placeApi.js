import axios from 'axios';
import {
  PLACES_API_PATH,
  PLACE_DETAILS_API_PATH,
} from 'constants/apiPaths';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common = {
  Accept: 'application/json, application/xml, text/play, text/html, *.*',
  'Content-Type': 'application/json',
};

export const getPlaceIds = (params) => {
  return axios.get(`${PLACES_API_PATH}/`, {
    params,
  }).then(({ data }) => data);
};

export const getPlaceDetails = (params) => {
  return axios.get(`${PLACE_DETAILS_API_PATH}/`, {
    params,
  }).then(({ data }) => data);
};
