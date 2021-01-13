import {
    REACHED_ROOMS,
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_ERROR,
} from './constants';

export const reachedRooms = () => ({
    type: REACHED_ROOMS,
});

export const getRooms = params => ({
    type: GET_ROOMS,
    ...params,
});

export const getRoomsSuccess = data => ({
    type: GET_ROOMS_SUCCESS,
    data,
});

export const getRoomsError = error => ({
    type: GET_ROOMS_ERROR,
    error,
});
