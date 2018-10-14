import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  loginStatus: false,
  msg: '',
  id: 0,
  nickname: '',
  userInfo: {
    username: '',
    password: '',
    remember: true,
  },
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_USER_INFO:
      for (const [key, value] of action.userData) {
        return state.setIn(['userInfo', key], value);
      }
      break;
    case constants.CHANGE_LOGIN_STATUS:
      return state.set('loginStatus', action.status);
    case constants.CHANGE_MSG:
      return state.set('msg', action.msg);
    case constants.CHANGE_LOGGED_USER_INFO:
      return state.merge({
        id: action.id,
        nickname: action.nickname,
      });
    default:
      return state;
  }
};

export { reducer };