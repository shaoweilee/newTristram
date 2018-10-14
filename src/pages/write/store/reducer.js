import { fromJS } from "immutable";

import * as constants from "./constants";

const defaultState = fromJS({
  data: {
    notebooks: [
      { notebookId: 0, notebookName: '加载中……' },
    ],
    articles: [
      { articleId: 1, notebookId: 0, articleName: '加载中……' },
    ],
  },
  showInput: false,
  createInputValue: '',
  articleBtnDisabled: true,
  currentSelectedNotebookId: 0,
  currentArticleTitle: '',
  currentArticleContent: '',
  currentArticleId: 0,
  requestArticleId: 0,
  initOpen: true,
  editor: null,
  loading: false,
  createType: 'note',
  autoSaving: false,
  pubPanelShow: false,
  modelOkText: '发布',
});

const updateCertainArticle = (state, article) => {
  // const result = state.getIn(['data', 'articles'])
  //   .filter((value, key) => {
  //     return value.get('articleId') === articleId;
  //   })//过滤出来的是个List，对应数组
  //   .first();
  // const afterMerge = result.merge({ articleContent });
  // const result1 = state.getIn(['data', 'articles']).merge(afterMerge);
  // console.log(afterMerge);
  // console.log(result1);
  const jsState = state.toJS();
  const { data: { articles } } = jsState;
  // const targetIndex = articles.findIndex((value) => value.articleId === articleId);
  let target = articles.find((value) => value.articleId === article.articleId);
  Object.assign(target, article);
  // const newState = {
  //   ...jsState,
  //   data: {
  //     ...data,
  //     articles: [
  //       ...articles.slice(0, targetIndex),
  //       article,
  //       ...articles.slice(targetIndex + 1)
  //     ],
  //   }
  // };
  return fromJS(jsState);
};
const deleteArticleAndNotebook = (state, articleId, notebookId) => {
  const jsState = state.toJS();
  const { data: { articles, notebooks } } = jsState;
  if (notebookId) {
    const targetIndexInNotebooks = notebooks.findIndex((notebook) => notebook.notebookId === notebookId);
    notebooks.splice(targetIndexInNotebooks, 1);
  }
  const targetIndexInArticles = articles.findIndex((article) => article.articleId === articleId);
  articles.splice(targetIndexInArticles, 1);
  return fromJS(jsState);
};
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SAVE_CURRENT_ARTICLE:
      return state.setIn(['currentArticle', 'articleId'], action.id).setIn(['currentArticle', 'content'], action.content);
    case constants.SAVE_CURRENT_TITLE:
      return state.setIn(['currentArticle', 'articleId'], action.id).setIn(['currentArticle', 'title'], action.title);
    case constants.CHANGE_STATUS:
      return state.set(action.key, action.value);
    case constants.UPDATE_ARTICLES:
      return state.setIn(['data', 'articles'], action.articles);
    case constants.UPDATE_CERTAIN_ARTICLE:
      return updateCertainArticle(state, action.article);
    case constants.DELETE_ARTICLE_AND_NOTEBOOK:
      return deleteArticleAndNotebook(state, action.articleId, action.notebookId);
    default:
      return state;
  }
};

export { reducer };