import { call, takeEvery, put } from 'redux-saga/effects';
import {
  getPlaceIds,
  getPlaceDetails,
} from 'services/placeApi';
import { getRandom } from 'lib/utils';
import placeActions from 'actions/placeActions';
import {
  FETCH_PLACES,
  FETCH_PLACE_DETAILS,
} from 'actions/placeActionTypes';

function* fetchPlace(action) {
  try {
    const { payload } = action;
    const params = { ...payload, price: payload.price.toString() };
    const places = yield call(getPlaceIds, params);
    const randomPlace = getRandom(places);
    yield put(placeActions.setDetails(randomPlace));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* fetchPlaceDetails(action) {
  try {
    const placeDetail = yield call(getPlaceDetails, action.payload);
    yield put(placeActions.setDetails(placeDetail));
  } catch (e) {
    console.log('error! ', e);
  }
}

function* placeSagas() {
  yield takeEvery(FETCH_PLACES, fetchPlace);
  yield takeEvery(FETCH_PLACE_DETAILS, fetchPlaceDetails);
}

export default placeSagas;
