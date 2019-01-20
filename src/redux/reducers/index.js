import { combineReducers } from "redux";
import { PLAY } from "../actionsTypes";

import data from "./data";
import play from "./play";

const appReducer = combineReducers({ data, play });

export default (state, action) => {
  if (action.type === PLAY.LOGIN_REQUEST) {
    state = undefined;
  }

  return appReducer(state, action);
};
