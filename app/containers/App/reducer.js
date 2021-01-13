/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
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
  UPDATE_TOGGLE_MENU,
  UPDATE_MODAL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  toggles: {
    menu: {
      expanded: true,
    },
    sidebar: {
      expanded: false,
      itemActived: null,
    },
  },
  modal: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_CURRENT_USER:
        draft.loading = true;
        draft.currentUser = false;
        break;

      case LOAD_CURRENT_USER_SUCCESS:
        draft.loading = false;
        draft.currentUser = action.user;
        break;

      case LOAD_CURRENT_USER_ERROR:
        draft.loading = false;
        draft.currentUser = false;
        break;

      case LOAD_CURRENT_USER_CONTAINER:
        draft.currentUser.containers = action.data;
        break;

      case LOAD_CURRENT_USER_CONTAINER_SUCCESS:
        draft.currentUser.containers = {
          ...draft.containers,
          ...action.data.data.getUserContainer,
        };
        break;

      case LOAD_CURRENT_USER_CONTAINER_ERROR:
        draft.error = action.errors;
        break;

      case UPDATE_CURRENT_USER_CONTAINER:
        break;

      case UPDATE_CURRENT_USER_CONTAINER_SUCCESS:
        break;

      case UPDATE_CURRENT_USER_CONTAINER_ERROR:
        draft.error = action.errors;
        break;

      case UPDATE_TOGGLE_MENU:
        // eslint-disable-next-line no-case-declarations
        const { key } = action.data;
        // eslint-disable-next-line no-case-declarations
        const { itemActived } = action.data;
        if (key === 'menu') {
          if (action.data && action.data.isMobile) {
            draft.toggles.menu.expanded = false;
            return;
          }
          draft.toggles.menu.expanded = !draft.toggles.menu.expanded;
        }
        if (key === 'sidebar') {
          if (itemActived) {
            if (draft.toggles.sidebar.itemActived === itemActived) {
              draft.toggles.sidebar.expanded = !draft.toggles.sidebar.expanded;
              draft.toggles.sidebar.itemActived = null;
            } else {
              draft.toggles.sidebar.expanded = true;
              draft.toggles.sidebar.itemActived = itemActived;
            }
          } else {
            draft.toggles.sidebar.expanded = false;
            draft.toggles.sidebar.itemActived = null;
          }
        }
        break;

      case UPDATE_MODAL:
        draft.modal = action.data;
        break;

      case LOGOUT:
        draft.loading = true;
        break;

      case LOGOUT_SUCCESS:
        draft.loading = false;
        draft.currentUser = false;
        break;

      case LOGOUT_ERROR:
        draft.loading = false;
        break;
    }
  });

export default appReducer;
