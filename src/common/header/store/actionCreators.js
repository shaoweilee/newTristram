import axios from "axios";
import { fromJS } from "immutable";

import * as constants from "./actionTypes";

import { actionCreators } from "../../../pages/login/store";
import { requestURL } from "../../config";
const change_list_action = (data) => {
  return {
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
  };
};

const search_focus_blur_action = (type) => {
  return {
    type,
  };
};
const mouseEnter = () => {
  return {
    type: constants.MOUSE_ENTER,
  };
};
const mouseLeave = () => {
  return {
    type: constants.MOUSE_LEAVE,
  };
};
const switchPage = (nextPage) => {
  return {
    type: constants.SWITCH_PAGE,
    nextPage,
  };
};
const changeSearchValue = (value) => ({
  type: constants.CHANGE_SEARCHVALUE,
  value,
});
const getList = () => {
  return function (dispatch) {
    axios.get(`${requestURL}api/getList`).
      then((res) => {
        const { success, data } = res.data;
        if (success) {
          dispatch(change_list_action(data));
        }
      }).
      catch((err) => {
        console.log(err);
      })

  };
};
const logout = () => {
  return (dispatch) => {
    axios.get(`${requestURL}user/logout`)
      .then(({ data: { code } }) => {
        if (code) {
          dispatch(actionCreators.changeLoginStatus(false));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export { search_focus_blur_action, getList, mouseEnter, mouseLeave, switchPage, logout, changeSearchValue };