import axios from "axios";
import * as constants from "./constants";
import { requestURL } from "../../../common/config";
const addPageAC = (currentPage, step) => ({
  type: constants.ADD_PAGE,
  page: currentPage + step,
});
const updateArticlesAC = (articles) => ({
  type: constants.UPDATE_ARTICLES_IN_SEARCH,
  articles,
});
const changeKeywordAndTypeAC = (searchType, keyword) => ({
  type: constants.CHANGE_KEYWORD,
  searchType,
  keyword,
});
const changeShowSearchResultAC = (showSearchResult) => ({
  type: constants.CHANGE_SEARCH_RESULT_SHOW,
  showSearchResult,
});
const changeHasMore = (hasMore) => ({
  type: constants.CHANGE_HAS_MORE,
  hasMore,
});
const searchAsyncAC = (requestPage) => {
  return function (dispatch) {
    axios.get(`${requestURL}search/search${location.search}&page=${requestPage}`)
      .then(({ data: { code, articles, usersWithoutRepeat: users } }) => {
        switch (code) {
          case 1:
            {
              const articlesWithNickname = articles.map((article) => {
                for (const { id, nickname } of users) {
                  if (article.nickname === undefined && article.authorId === id) {
                    return { ...article, nickname };
                  }
                }
              });
              dispatch(updateArticlesAC(articlesWithNickname));
            }
            break;
          case 0:
            if (requestPage === 0) {//第一次请求就没有查找到。
              dispatch(changeShowSearchResultAC(false));
            }
            dispatch(changeHasMore(false));
            break;

          default:
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
    dispatch(addPageAC(requestPage, 1));
  };
};

export { searchAsyncAC, changeKeywordAndTypeAC };