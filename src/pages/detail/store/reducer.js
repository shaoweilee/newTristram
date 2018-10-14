import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  authorNickname: '',
  title: '',
  content: '',
  createTime: '',
  updateTime: '',
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_DETAIL_DATA:
      return state.merge({
        authorNickname: fromJS(action.data.authorNickname),
        title: fromJS(action.data.title),
        content: fromJS(action.data.content),
        createTime: fromJS(action.data.createTime),
        updateTime: fromJS(action.data.updateTime),
      });
    default:
      return state;
  }
};

export { reducer };