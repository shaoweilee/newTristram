import { fromJS } from "immutable";

import * as constants from "./constants";

const defaultState = fromJS({
  msg: '',
  nickname: '',
  username: '',
  password: '',
  buttonStatus: '注册'
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_USER_INPUT:
      return state.set(action.key, action.value);
    default:
      return state;
  }
};

export { reducer };