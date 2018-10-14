import axios from "axios";

import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import { requestURL } from "../../../common/config";

const getAsyncData = (url, dispatch, actionCreator, ...rest) => {
  axios.get(url)
    .then(res => {
      const { success, data } = res.data;
      if (success) {
        const action = actionCreator(data, ...rest);
        dispatch(action);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

const getWritterListActionCreator = (data) => {
  return {
    type: constants.CHANGE_WRITTER_LIST,
    data: fromJS(data),
  };
}

const getHomeDataActionCreator = (articles, topic, focusImg) => {
  return {
    type: constants.GET_INITIAL_HOME_DATA,
    articles,
    topic,
    focusImg,
  };
};
const getMoreListActionCreator = (data, currentPage) => {
  return {
    type: constants.GET_MORE_ARTICLE,
    data: fromJS(data),
    nextPage: currentPage + 1,
  };
};
const getArticlesAC = (articles) => ({
  type: constants.GET_ARTICLES,
  articles: fromJS(articles),
});
const increaseRequestPageAC = (curPage, step) => ({
  type: constants.INCREASE_REQUEST_PAGE,
  page: curPage + step,
});
const changeHasMoreInHomeAC = (hasMore) => ({
  type: constants.CHANGE_HAS_MORE_IN_HOME,
  hasMore,
});
const resetDataAC = () => ({
  type: constants.RESET_DATA,
});
const getMoreList = (requestPage) => {
  return function (dispatch) {
    getAsyncData(`http://localhost:5499/api/morehomelist?page=${requestPage}`, dispatch, getMoreListActionCreator, requestPage);
  };
};
const getHomeData = (requestPage) => {
  return function (dispatch) {//get home articles
    axios.get(`${requestURL}api/homeArticles?page=${requestPage}`)
      .then(({ data: { code, articles, users, topic, focusImg } }) => {
        switch (code) {
          case 1:
            {
              const articlesWithNickname = articles.map((article) => {
                const { nickname } = users.find(({ id }) => id === article.authorId);
                return { ...article, nickname };
              });
              if (topic !== undefined) {
                dispatch(getHomeDataActionCreator(articlesWithNickname, topic, focusImg));
              } else {
                dispatch(getArticlesAC(articlesWithNickname));
              }
            }
            break;
          case 0:
            dispatch(changeHasMoreInHomeAC(false));
            break;

          default:
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
    dispatch(increaseRequestPageAC(requestPage, 1));
  };
};
// const getHomeData = () => {
//   return function (dispatch) {
//     getAsyncData('http://localhost:5499/api/homeData', dispatch, getHomeDataActionCreator);
//   };
// };
const getWritterList = () => {
  return function (dispatch) {
    getAsyncData('http://localhost:5499/api/writterList', dispatch, getWritterListActionCreator);
  };
};

const changeScrollShowStateAC = (state) => {
  return {
    type: constants.CHANGE_SCROLL_TOP_STATE,
    state,
  };
};
export { getWritterList, getHomeData, getMoreList, changeScrollShowStateAC, resetDataAC };