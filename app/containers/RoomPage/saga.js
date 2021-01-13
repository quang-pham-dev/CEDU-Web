import { put, takeLatest, delay } from 'redux-saga/effects';
import { API, graphqlOperation } from 'aws-amplify';
import { listPages } from 'graphql/queries';
import { getPublicRoomsSuccess, getPublicRoomsError } from './actions';
import { GET_ROOMS } from './constants';

export function* getPublicRooms(params) {
  try {
    const options = {
      limit: 3,
      filter: null,
      nextToken: params.nextToken ? params.nextToken : null,
    };
    const res = yield API.graphql(graphqlOperation(listPages, options));
    yield delay(3000);
    yield put(getPublicRoomsSuccess(res.data.listPages));
  } catch (error) {
    error.message = 'Error has occured, please try again !';
    yield delay(3000);
    yield put(getPublicRoomsError(error));
  }
}

export default function* saga() {
  yield takeLatest(GET_ROOMS, getPublicRooms);
}
