import * as constants from "./constants";
import { fromJS } from "immutable";
import axios from "axios";
import { requestURL } from "../../../common/config";
axios.defaults.withCredentials = true;

const changeUserInfo = (userData) => {
  return {
    type: constants.CHANGE_USER_INFO,
    userData: fromJS(userData),
  };
};
const changeLoginStatus = (status) => {
  return {
    type: constants.CHANGE_LOGIN_STATUS,
    status,
  };
};
const changeMsg = (msg) => ({
  type: constants.CHANGE_MSG,
  msg,
});
const changeLoggedUserInfo = (id, nickname) => ({
  type: constants.CHANGE_LOGGED_USER_INFO,
  id,
  nickname,
});
const loginFunctionalAC = (data) => {
  return function (dispatch) {
    axios.post(
      `${requestURL}user/login`,
      data,
    )
      .then(res => {
        const { success, code, id, nickname } = res.data;
        if (success) {
          switch (code) {
            case 0:
              dispatch(changeMsg('登录成功！'));
              dispatch(changeLoginStatus(true));
              dispatch(changeLoggedUserInfo(id, nickname));
              break;
            case 1:
              dispatch(changeMsg('用户名不存在'));
              break;
            case 2:
              dispatch(changeMsg('密码错误'));
              break;
            default:
              break;
          }
        }
      })
      .catch();
  };
};
export { changeUserInfo, loginFunctionalAC, changeLoginStatus, changeMsg, changeLoggedUserInfo };