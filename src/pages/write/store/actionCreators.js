import axios from "axios";
import { message } from "antd";

import * as constants from "./constants";
import { fromJS } from "immutable";
import { requestURL } from "../../../common/config";
const changeStatus = (key, value) => ({
  type: constants.CHANGE_STATUS,
  key,
  value,
});
const updateArticlesAC = (articles) => {
  return {
    type: constants.UPDATE_ARTICLES,
    articles,
  };
};
/**
 * 更新本地state中，单篇文章的状态
 * @param {object} article 
 */
const updateCertainArticleAC = (article) => {
  return {
    type: constants.UPDATE_CERTAIN_ARTICLE,
    article,
  };
};

const deleteArticleAndNotebookAC = (articleId, notebookId) => ({
  type: constants.DELETE_ARTICLE_AND_NOTEBOOK,
  articleId,
  notebookId,
});
/**
 * 创建文集
 * @param {*} hide 
 * @param {*} notebookName 
 */
const saveNotebookFunctionAC = (hide, notebookName) => {
  return function (dispatch) {
    axios.post(
      `${requestURL}write/saveNotebook`,//url
      { notebookName }
    )
      .then(res => {
        const { success, code, notebookId } = res.data;
        if (success) {
          switch (code) {
            case 0:
              hide();
              message.success('创建成功！', 3);
              dispatch(requestDataFunctionAC());
              dispatch(saveArticleFunctionAC(//创建文集成功之后，自动新建一篇文章
                message.info('为新文集自动创建文章……'),
                {
                  notebookId,
                  articleName: new Date().toLocaleString(),
                  articleContent: '',
                  finished: false,
                },
                true
              ));
              break;
            case 1:
              hide();
              message.error('创建失败！原因：文集名重复', 3);
              break;
            default:
              break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
/**
 * 请求所有文章数据
 */
const requestDataFunctionAC = () => {
  return function (dispatch) {
    axios.get(
      `${requestURL}write/getNotes`,//url
    )
      .then(res => {
        const { success, notebooks, articles } = res.data;
        if (success) {
          dispatch(changeStatus('data', fromJS({ notebooks, articles })));
        }
      })
      .catch();
  };
};
/**
 * 创建文章
 * @param {*} hide 
 * @param {*} data 
 * @param {*} auto 
 */
const saveArticleFunctionAC = (hide, data, auto) => {
  return function (dispatch) {
    axios.post(
      `${requestURL}write/saveArticle`,//url
      data
    )
      .then(({ data: { success, code, articles, articleId } }) => {
        if (success) {
          switch (code) {
            case 0:
              // if (!auto) {
              //   dispatch(changeStatus('currentArticleId', articleId));//如果是手动创建的新文章，就把当前在编辑的文章ID切换为新创建的，方便后续操作。
              // }
              hide();
              dispatch(updateArticlesAC(fromJS(articles)));//创建完成后，更新文章列表；这里服务器端要优化一下字段，现在是所有文章整体都返回了。
              message.info(`已${auto ? '自动' : ''}创建新文章！`, 3);
              break;
            default:
              break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
/**
 * 自动保存文章
 * @param {*} data 
 */
const autoSaveFunctionAC = (data) => {
  return (dispatch) => {
    dispatch(changeStatus('autoSaving', true));
    axios.post(
      `${requestURL}write/autoSave`,
      data,
    )
      .then(res => {
        const { success, code } = res.data;
        if (success) {
          switch (code) {
            case 1:
              dispatch(changeStatus('autoSaving', false));
              if (data.updateType === 'finished') {
                dispatch(updateCertainArticleAC({ articleId: data.articleId, finished: data.finished }));
              }
              break;
            case 0:
              console.log('更新失败，文章不存在');
              break;
            default:
              break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
/**
 * 异步获取单篇文章内容
 * @param {*} articleId 
 * @param {*} editor 
 */
const getNotesDetailAsyncAC = (articleId, editor) => {
  return (dispatch) => {
    dispatch(changeStatus('loading', true));
    dispatch(changeStatus('requestArticleId', articleId));
    axios.get(
      `${requestURL}write/getDetail?articleId=${articleId}`,
    )
      .then(res => {
        const { success, article, article: { articleName, articleContent } } = res.data;
        if (success) {//获取后，应当更新本地state中，该篇文章的内容。
          // dispatch(changeStatus('currentArticleContent', articleContent));//useless
          dispatch(updateCertainArticleAC(article));
          dispatch(changeStatus('loading', false));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};

const publishAsyncAC = (data) => {
  return (dispatch) => {
    dispatch(changeStatus('modelOkText', '发布中……'));
    axios.post(
      `${requestURL}write/publish`,
      data
    )
      .then(res => {
        dispatch(updateCertainArticleAC({ ...data, finished: true, publishSite: res.data.publishSite }));
        dispatch(changeStatus('pubPanelShow', false));
        dispatch(changeStatus('modelOkText', '发布'));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
const deleteArticleAndNotebookAsyncAC = (articleId, notebookId = 0) => {
  const hide = message.loading(`正在删除${notebookId ? '文集独子' : '文章'}`);
  return (dispatch) => {
    axios.get(
      notebookId ?
        `${requestURL}write/delArticle?articleId=${articleId}&notebookId=${notebookId}`
        :
        `${requestURL}write/delArticle?articleId=${articleId}`
    )
      .then(res => {
        dispatch(changeStatus('currentArticleId', 0));
        dispatch(changeStatus('initOpen', true));
        dispatch(deleteArticleAndNotebookAC(articleId, notebookId));
        hide();
        message.info(notebookId ? '删除成功，所属文集也删除了！' : '删除成功！', 2);
      })
      .catch();
  };
};
export { changeStatus, saveNotebookFunctionAC, requestDataFunctionAC, saveArticleFunctionAC, autoSaveFunctionAC, getNotesDetailAsyncAC, updateCertainArticleAC, publishAsyncAC, deleteArticleAndNotebookAsyncAC };