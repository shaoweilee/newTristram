import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  articlelist: [],
  nextPage: 0,
  showSearchResult: true,
  hasMore: true,
  keyword: '',
  searchType: 'keyword',
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.ADD_PAGE:
      return state.set('nextPage', action.page);
    case constants.UPDATE_ARTICLES_IN_SEARCH:
      return state.set('articlelist', state.get('articlelist').concat(fromJS(action.articles)));
    case constants.CHANGE_KEYWORD:
      // return state.set('keyword', action.keyword);
      return state.merge({
        searchType: action.searchType,
        keyword: action.keyword,
      });
    case constants.CHANGE_SEARCH_RESULT_SHOW:
      return state.set('showSearchResult', action.showSearchResult);
    case constants.CHANGE_HAS_MORE:
      return state.set('hasMore', action.hasMore);
    default:
      return state;
  }
};

export { reducer };