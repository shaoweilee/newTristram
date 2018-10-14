import React from "react";
import { connect } from "react-redux";
import E from "wangeditor";
import { Layout, Menu, Icon, Button, Tree, message, Spin } from "antd";
import { Link, withRouter } from "react-router-dom";
import { actionCreators } from "./store";
import { InputWithButtons } from "./components/inputwithbuttons";
import MutiStatesButton from "./containers/mutistatesbutton";
import PublishPop from "./containers/publishpop";
import './index.scss';
import { authentication } from "../../common/authentication";
import { requestURL } from "../../common/config";
class Write extends React.Component {
  state = {
    currentFocus: 'title',
  }
  componentWillMount() {
    const { requestData } = this.props;
    //权限认证
    const hide = message.loading('检查登录状态ing');
    authentication()
      .then(({ data: code }) => {
        if (code) {
          requestData();
          hide();
          message.success('欢迎回来，英雄！', 2);
        } else {
          hide();
          message.error('英雄请留步，请您先登录~', 2);
          this.props.history.push('/login');
        }
      })
      .catch(err => {
        console.log(err);
      })
  }
  componentDidUpdate() {
    const { editor, currentArticleId, requestArticleId, articles } = this.props;
    if (this.state.currentFocus === 'none' && currentArticleId === requestArticleId) {
      const article = articles.toJS().find(({ articleId }) => currentArticleId === articleId);
      if (article && !article.autoSave) {//第二个判断：用户点击了文章，组件更新后自动聚焦于内容，但是没有触发editor的focus事件，currentFocus依然是none；用户输入后触发自动保存，自动保存触发组件更新，currentFocus依然是none，在网速慢或者运行慢的情况下，有可能会出现本地保存的内容覆盖了输入的内容，因此要在自动更新时，为本地存储添加一个autosave的字段，阻止这次覆盖。
        editor.txt.html(article.articleContent);
      }
    }
  }
  componentDidMount() {
    const { handleContentChange, handleTitleChange, initEditor } = this.props;
    const editor = new E('.editor_toolbar', '.editor_text');
    editor.customConfig.uploadImgServer = `${requestURL}upload`;
    editor.customConfig.onfocus = () => {
      this.setState({
        currentFocus: 'content',
      });
    }

    // const autoSaveFn = (timerArray, value, change) => {
    //   const id = this.getNewArticleId();
    //   let timer = setTimeout(() => {
    //     if (timerArray.length > 1) {
    //       timerArray.pop();
    //       for (const timer of timerArray) {
    //         clearTimeout(timer);
    //       }
    //     } else {
    //       const newId = this.getNewArticleId();
    //       if (id === newId) {
    //         change(value, id);
    //       }
    //     }
    //     timerArray = [];
    //   }, 1500);
    //   timerArray.push(timer);
    // }

    //内容自动保存逻辑
    let timerArray = [];
    editor.customConfig.onchange = (html) => {
      // autoSaveFn(timerArray, html, handleContentChange);//won't work
      const id = this.getNewArticleId();
      let timer = setTimeout(() => {
        if (timerArray.length > 1) {
          timerArray.pop();
          for (const timer of timerArray) {
            clearTimeout(timer);
          }
        } else {
          const newId = this.getNewArticleId();
          if (id === newId) {
            handleContentChange(html, id);
          }
        }
        timerArray = [];
      }, 1500);
      timerArray.push(timer);
    };
    //内容自动保存逻辑

    editor.create();
    initEditor(editor);

    //标题自动保存逻辑
    let titleTimerArray = [];
    this.titleInput.addEventListener('input', ({ target: { value } }) => {
      const id = this.getNewArticleId();
      let timer = setTimeout(() => {
        if (titleTimerArray.length > 1) {
          titleTimerArray.pop();
          for (const timer of titleTimerArray) {
            clearTimeout(timer);
          }
        } else {
          const newId = this.getNewArticleId();
          if (id === newId) {
            handleTitleChange(value, id);
          }
        }
        titleTimerArray = [];
      }, 1500);
      titleTimerArray.push(timer);
    });
    //标题自动保存逻辑
  }

  getNewArticleId = ({ currentArticleId } = this.props) => currentArticleId
  // handleTitleChange = (value, getId) => {
  // let { timerArray } = this.state;
  // const id = this.getNewArticleId();
  // let timer = setTimeout(() => {
  //   console.log(timerArray);
  //   if (timerArray.length > 1) {
  //     timerArray.pop();
  //     for (const timer of timerArray) {
  //       clearTimeout(timer);
  //     }
  //   } else {
  //     const newId = this.getNewArticleId();
  //     if (id === newId) {
  //       // handleContentChange(html, id);
  //       console.log('应当更新');
  //     }
  //   }
  // }, 1500);
  // timerArray.push(timer);
  // }

  handleTitleFocus = () => {
    this.setState({
      currentFocus: 'title',
    });
  }
  render() {
    const { editor, notebooks, articles, showInput,
      handleBtnClick, getInputValue, createInputValue, handleConfirm, handleCancel,
      articleBtnDisabled, handleSelect, currentSelectedNotebookId, currentArticleId, initOpen, handleDelete,
      loading, createType,
    } = this.props;
    const { Header, Content, Footer, Sider } = Layout;
    const { DirectoryTree, TreeNode } = Tree;

    let notebooksData = [];
    let articlesData = [];
    if (notebooks && articles) {
      notebooksData = notebooks.toJS();
      articlesData = articles.toJS();
    }
    return (
      <Layout className='main'>
        {/* 左侧边栏 */}
        <Sider theme='light' width='300' className='sider-fixed'>
          <Button block type='primary' href='/' >回首页</Button>
          <DirectoryTree defaultExpandAll expandAction='doubleClick'
            onSelect={(...rest) => {
              this.setState({
                currentFocus: 'none',
              });
              handleSelect(rest, editor, articlesData, this.titleInput);
            }}
          >
            {
              notebooksData.map(notebook => {
                return (
                  <TreeNode title={notebook.notebookName} key={notebook.notebookId} isLeaf={false}>
                    {
                      articlesData.filter((article) => article.notebookId === notebook.notebookId)
                        .map(({ articleId, articleName }) => <TreeNode title={articleName} key={articleId} isLeaf={true} />)
                    }
                  </TreeNode>
                );
              }
              )
            }
          </DirectoryTree>
          <Button block onClick={() => { handleBtnClick('note') }}>新建文集</Button>
          <Button block onClick={() => { handleBtnClick('article'); }} disabled={articleBtnDisabled}>{articleBtnDisabled ? '选中文集--新建文章' : '新建文章'}</Button>
          <Button block onClick={() => { handleDelete(currentArticleId, articlesData, notebooksData) }} type='danger' disabled={!articleBtnDisabled || initOpen}>{!articleBtnDisabled ? '选中文章--删除文章' : '删除文章'}</Button>
          {showInput ?
            <InputWithButtons {...{ getInputValue, createInputValue, handleConfirm, handleCancel, createType, currentSelectedNotebookId }} />
            :
            null
          }
        </Sider>
        {/* 右内容区 */}
        {/* <Layout className='content_container'> */}
        <Layout style={{ marginLeft: 300 }}>
          <Content className='editor_container'>
            <div className={initOpen ? 'show_mask' : 'hide_mask'}><p>选择文章以开始编辑</p></div>
            <Spin spinning={loading}>
              <input type='text' className='editor_title' placeholder='请输入标题'
                onFocus={this.handleTitleFocus}
                ref={input => { this.titleInput = input; }} />
              {/* 将生成编辑器 */}
              <div className='editor_border'>
                <div className='editor_toolbar'></div>
              </div>
              <div className='editor_text'></div>
              <MutiStatesButton {...{ articlesData }} />
              <PublishPop {...{ articlesData }} />
            </Spin>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapState = (state) => {
  return {
    editor: state.getIn(['write', 'editor']),
    notebooks: state.getIn(['write', 'data', 'notebooks']),
    articles: state.getIn(['write', 'data', 'articles']),
    showInput: state.getIn(['write', 'showInput']),
    createInputValue: state.getIn(['write', 'createInputValue']),
    articleBtnDisabled: state.getIn(['write', 'articleBtnDisabled']),
    currentSelectedNotebookId: state.getIn(['write', 'currentSelectedNotebookId']),
    currentArticleId: state.getIn(['write', 'currentArticleId']),
    requestArticleId: state.getIn(['write', 'requestArticleId']),
    loading: state.getIn(['write', 'loading']),
    createType: state.getIn(['write', 'createType']),
    initOpen: state.getIn(['write', 'initOpen']),
  };
};

const mapDispatch = (dispatch) => {
  return {
    // handleChange(html, timerArray, getId) {/********************here!!!!!!**************************************/
    //   const id = getId();

    //   let timer = setTimeout(() => {
    //     if (timerArray.length > 1) {
    //       timerArray.pop();
    //       for (const timer of timerArray) {
    //         clearTimeout(timer);
    //       }
    //     } else {
    //       const newId = getId();
    //       if (id === newId) {
    //         console.log('触发自动保存。');
    //         // handleContentChange(html, id);//内容存储到服务器上
    //         dispatch(actionCreators.autoSaveFunctionAC({ articleContent: html, articleId: id }));
    //         dispatch(actionCreators.updateCertainArticleAC({ articleContent: html, articleId: id, autoSave: true }));
    //       }
    //     }
    //     timerArray = [];
    //   }, 1500);


    //   timerArray.push(timer);
    //   console.log(timerArray);
    // },
    initEditor(editor) {
      dispatch(actionCreators.changeStatus('editor', editor));
    },
    requestData() {
      dispatch(actionCreators.requestDataFunctionAC());
    },
    handleTitleChange(value, id) {
      dispatch(actionCreators.updateCertainArticleAC({ articleName: value, articleId: id }));
      dispatch(actionCreators.autoSaveFunctionAC({ articleName: value, articleId: id, updateType: 'articleName' }));
    },
    handleContentChange(value, id, autoSave = true) {
      dispatch(actionCreators.updateCertainArticleAC({ articleContent: value, articleId: id, autoSave }));
      dispatch(actionCreators.autoSaveFunctionAC({ articleContent: value, articleId: id, updateType: 'articleContent' }));
    },
    handleBtnClick(type) {
      dispatch(actionCreators.changeStatus('createType', type));
      dispatch(actionCreators.changeStatus('showInput', true));
      dispatch(actionCreators.changeStatus('createInputValue', new Date().toLocaleString()));
    },
    handleConfirm(...rest) {
      const [v, type, currentSelectedNotebookId] = rest;
      if (v.trim()) {
        const hide = message.loading('创建中……');
        switch (type) {
          case 'note':
            dispatch(actionCreators.saveNotebookFunctionAC(hide, v));
            break;
          case 'article':
            dispatch(actionCreators.saveArticleFunctionAC(//请求服务器存储新**手动**创建的文章。
              hide,
              {
                notebookId: currentSelectedNotebookId,
                articleName: v,
                articleContent: '',
                finished: false,
              },
              false
            ));
            break;
          default:
            break;
        }
        dispatch(actionCreators.changeStatus('showInput', false));
      }
    },
    handleCancel() {
      dispatch(actionCreators.changeStatus('showInput', false));
    },
    getInputValue(e) {
      dispatch(actionCreators.changeStatus('createInputValue', e.target.value.replace(/\s+/g, ' ')));
    },
    handleSelect([selectedKeys, e], editor, articlesData, titleInputEl) {//******************handleSelect********************************/
      const { node: { props: { isLeaf, eventKey } } } = e;
      if (!isLeaf) {//如果点击的是文集
        dispatch(actionCreators.changeStatus('currentSelectedNotebookId', Number(eventKey)));
      } else {//点击的是文章，异步获取文章详情，然后呈现出来。
        const currentArticleId = Number(selectedKeys[0]);
        dispatch(actionCreators.changeStatus('currentArticleId', currentArticleId));//currentArticleId也要同步。
        dispatch(actionCreators.changeStatus('initOpen', false));
        const article = articlesData.find((article) => article.articleId === currentArticleId);
        titleInputEl.value = article.articleName;
        if (article.articleContent !== undefined) {
          editor.txt.html(article.articleContent);
        } else {
          dispatch(actionCreators.getNotesDetailAsyncAC(currentArticleId, editor));
        }
      }
      dispatch(actionCreators.changeStatus('articleBtnDisabled', isLeaf));
    },
    handleDelete(articleId, articles, notebooks) {
      const article = articles.find((article) => article.articleId === articleId);
      const notebookId = article.notebookId;
      const articlesInThisNotebook = articles.filter((article) => article.notebookId === notebookId);
      if (articlesInThisNotebook.length === 1) {
        //删除文章及其文集
        dispatch(actionCreators.deleteArticleAndNotebookAsyncAC(articleId, notebookId));
      } else {
        //只删除文章
        dispatch(actionCreators.deleteArticleAndNotebookAsyncAC(articleId));
      }
    },
  };
};

export default connect(mapState, mapDispatch)(withRouter(Write));