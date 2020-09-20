import { takeLatest, put } from "redux-saga/effects";

import {
  LOGIN_USER,
  SET_USER,
  GET_DATA,
  SET_USERS_LIST,
  SET_POSTS,
  SAVE_LIST,
} from "../actions/types";
import http from "../../services/http";

const loginUser = function* ({ payload }) {
  try {
    const response = yield http.post("/api/googlelogin", {
      tokenId: payload,
    });
    yield put({ type: SET_USER, payload: response.data });
    yield localStorage.setItem(
      "react-node-test-user",
      JSON.stringify(response.data.tokenId)
    );
  } catch (e) {
    console.log(e);
  }
};

const getData = function* () {
  try {
    const response = yield http.get("/api");
    yield put({ type: SET_USERS_LIST, payload: response.data.usersList });
    yield put({ type: SET_POSTS, payload: response.data.posts });
  } catch (e) {
    console.log(e);
  }
};

const saveList = function* ({ payload }) {
  try {
    yield http.put("/api/savelist", {
      savedList: payload.savedList,
      email: payload.email,
    });
  } catch (e) {
    console.log(e);
  }
};

export default [
  takeLatest(LOGIN_USER, loginUser),
  takeLatest(GET_DATA, getData),
  takeLatest(SAVE_LIST, saveList),
];
