/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest, all } from 'redux-saga/effects';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import {
  selectCurrentUser,
  selectCurrentUserContainer,
} from 'utils/selectUserInfo';
import { createUserContainer, updateUserContainer } from 'graphql/mutations';
import { getUserContainer } from 'graphql/queries';
import {
  currentUserLoaded,
  currentUserError,
  currentUserContainer,
  currentUserContainerLoaded,
  currentUserContainerError,
  updateCurrentUserContainerSuccess,
  updateCurrentUserContainerError,
  logoutSuccess,
  logoutError,
} from './actions';
import {
  LOAD_CURRENT_USER,
  UPDATE_CURRENT_USER_CONTAINER,
  LOGOUT,
} from './constants';

export function* loadCurrentUser() {
  try {
    const currentUser = yield Auth.currentAuthenticatedUser();
    yield put(currentUserLoaded(selectCurrentUser(currentUser)));
    yield loadCurrentUserContainer(selectCurrentUserContainer(currentUser));
  } catch (error) {
    yield put(currentUserError(error));
  }
}

export function* loadCurrentUserContainer(userContainer) {
  try {
    yield put(currentUserContainer(userContainer));
    const request = yield API.graphql(
      graphqlOperation(getUserContainer, userContainer),
    );
    if (request.data.getUserContainer) {
      yield put(currentUserContainerLoaded(request));
      return;
    }
    yield createCurrentUserContainer(userContainer);
  } catch (error) {
    yield createCurrentUserContainer(userContainer);
    yield put(currentUserContainerError(error));
  }
}

export function* createCurrentUserContainer(userContainer) {
  try {
    const creating = yield API.graphql(
      graphqlOperation(createUserContainer, {
        input: userContainer,
      }),
    );
    yield put(currentUserContainerLoaded(creating));
  } catch (error) {
    yield put(currentUserContainerError(error));
  }
}

export function* updateCurrentUserContainer(userContainer) {
  try {
    const updating = yield API.graphql(
      graphqlOperation(updateUserContainer, {
        input: userContainer,
      }),
    );
    yield put(updateCurrentUserContainerSuccess(updating));
  } catch (error) {
    yield put(updateCurrentUserContainerError(error));
  }
}

export function* logout() {
  try {
    yield Auth.signOut({ global: true });
    yield put(logoutSuccess());
  } catch (error) {
    // Network has error occurred
    yield put(logoutError(error));
  }
}

export default function* appSaga() {
  yield all([
    takeLatest(LOAD_CURRENT_USER, loadCurrentUser),
    takeLatest(UPDATE_CURRENT_USER_CONTAINER, updateCurrentUserContainer),
    takeLatest(LOGOUT, logout),
  ]);
}
