/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import {
  REACHED_ROOMS,
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_ERROR,
} from './constants';

export const initialState = {
  data: [],
  loading: false,
  currentPage: 0,
  currentTotalPage: 0,
  nextToken: null,
  reached: false,
  error: null
};

const roomsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REACHED_ROOMS:
        draft.reached = true;
        break;

      case GET_ROOMS:
        draft.loading = true;
        draft.reached = true;
        break;

      case GET_ROOMS_SUCCESS:
        draft.data.push(...action.data.items);
        draft.currentTotalPage += action.data.items.length;
        draft.nextToken = action.data.nextToken;
        draft.error = null;
        draft.loading = false;
        break;

      case GET_ROOMS_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;

      default:
        break;
    }
  });

export default roomsReducer;
