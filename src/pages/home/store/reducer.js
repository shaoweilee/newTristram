import { fromJS } from "immutable";
import * as constants from "./actionTypes";

//use immutable.js, use state.get/set
const defalutState = fromJS({
  topicList: [],
  articlelist: [],
  focusImg: [],
  recommendList: [],
  writterList: [],
  nextPage: 0,
  backTopShow: false,
  hasMore: true,
});

const reducer = (state = defalutState, action) => {
  switch (action.type) {
    case constants.CHANGE_WRITTER_LIST:
      return state.set('writterList', action.data);
    case constants.GET_INITIAL_HOME_DATA:
      return state.merge({
        topicList: state.get('topicList').concat(fromJS(action.topic)),
        articlelist: state.get('articlelist').concat(fromJS(action.articles)),
        focusImg: state.get('focusImg').concat(fromJS(action.focusImg)),
        // recommendList: fromJS(action.data.recommendList),
        // writterList: fromJS(action.data.writterList),
      });
    case constants.GET_MORE_ARTICLE:
      return state.merge({
        articlelist: state.get('articlelist').concat(action.data),
        nextPage: action.nextPage,
      });
    case constants.CHANGE_SCROLL_TOP_STATE:
      return state.set('backTopShow', action.state);
    case constants.INCREASE_REQUEST_PAGE:
      return state.set('nextPage', action.page);
    case constants.CHANGE_HAS_MORE_IN_HOME:
      return state.set('hasMore', action.hasMore);
    case constants.RESET_DATA:
      return state.merge({
        nextPage: 0,
        topicList: fromJS([]),
        articlelist: fromJS([]),
        focusImg: fromJS([]),
      });
    case constants.GET_ARTICLES:
      return state.set('articlelist', state.get('articlelist').concat(action.articles));
    default:
      return state;
  }
};

export { reducer };