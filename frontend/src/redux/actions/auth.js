import {
  SET_USER,
  LOGIN_USER,
  SET_USERS_LIST,
  GET_DATA,
  SET_SAVED_LIST,
  SET_POSTS,
  SHOW_MODAL,
  SET_USER_ID,
  SORT_BY,
} from "./types";

export const setUserId = (id) => ({
  type: SET_USER_ID,
  payload: id,
});

export const sortBy = (filter) => ({
  type: SORT_BY,
  payload: filter,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const showModal = (show) => ({
  type: SHOW_MODAL,
  payload: show,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const setUsersList = (list) => ({
  type: SET_USERS_LIST,
  payload: list,
});

export const setSavedList = (list) => ({
  type: SET_SAVED_LIST,
  payload: list,
});

export const getData = () => ({
  type: GET_DATA,
});

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});
