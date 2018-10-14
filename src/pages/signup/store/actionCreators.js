import axios from "axios";
import { actionCreators as loginAC } from "../../login/store";
import * as constants from "./constants";
import { requestURL } from "../../../common/config";
const changeUserInput = (key, value) => {
  return {
    type: constants.CHANGE_USER_INPUT,
    key,
    value,
  };
};

const signUpFunctionalAC = (nickname, username, password) => {
  const data = { nickname, username, password };
  return function (dispatch) {
    axios.post(
      `${requestURL}user/sign_up`,//url
      data
    )
      .then(res => {
        const { success, id, code } = res.data;
        if (success) {
          switch (code) {
            case 1:
              dispatch(changeUserInput('msg', `用户名重复，sorry！`));
              dispatch(changeUserInput('buttonStatus', '注册'));
              setTimeout(() => {
                dispatch(changeUserInput('msg', ``));
              }, 2000);
              break;
            case 0:
              dispatch(changeUserInput('msg', `注册成功，欢迎你，${nickname}！正在跳转至首页···`));
              dispatch(loginAC.changeLoginStatus(true));
              dispatch(loginAC.changeLoggedUserInfo(id, nickname));
              dispatch(changeUserInput('buttonStatus', '注册'));
              break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export { changeUserInput, signUpFunctionalAC };