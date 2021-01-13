import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_CURRENT_USER,
  LOAD_CURRENT_USER_SUCCESS,
  LOAD_CURRENT_USER_ERROR,
  LOAD_CURRENT_USER_CONTAINER,
  LOAD_CURRENT_USER_CONTAINER_SUCCESS,
  LOAD_CURRENT_USER_CONTAINER_ERROR,
  UPDATE_CURRENT_USER_CONTAINER,
  UPDATE_CURRENT_USER_CONTAINER_SUCCESS,
  UPDATE_CURRENT_USER_CONTAINER_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  UPDATE_TOGGLE_MENU,
  UPDATE_MODAL,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

export function currentUser() {
  return {
    type: LOAD_CURRENT_USER,
  };
}

export function currentUserLoaded(user) {
  return {
    type: LOAD_CURRENT_USER_SUCCESS,
    user,
  };
}

export function currentUserError(error) {
  return {
    type: LOAD_CURRENT_USER_ERROR,
    error,
  };
}

export function currentUserContainer(userContainer) {
  return {
    type: LOAD_CURRENT_USER_CONTAINER,
    data: userContainer,
  };
}

export function currentUserContainerLoaded(userContainer) {
  return {
    type: LOAD_CURRENT_USER_CONTAINER_SUCCESS,
    data: userContainer,
  };
}

export function currentUserContainerError(errors) {
  return {
    type: LOAD_CURRENT_USER_CONTAINER_ERROR,
    error: errors,
  };
}

export function updateCurrentUserContainer(userContainer) {
  return {
    type: UPDATE_CURRENT_USER_CONTAINER,
    data: userContainer,
  };
}

export function updateCurrentUserContainerSuccess(userContainer) {
  return {
    type: UPDATE_CURRENT_USER_CONTAINER_SUCCESS,
    data: userContainer,
  };
}

export function updateCurrentUserContainerError(errors) {
  return {
    type: UPDATE_CURRENT_USER_CONTAINER_ERROR,
    error: errors,
  };
}

export function updateToggleMenu(data) {
  return {
    type: UPDATE_TOGGLE_MENU,
    data,
  };
}

export function updateModal(data) {
  return {
    type: UPDATE_MODAL,
    data,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutError() {
  return {
    type: LOGOUT_ERROR,
  };
}
