(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullPageLoading=void 0;var r=o(n(75));n(76);var a=o(n(1));function o(e){return e&&e.__esModule?e:{default:e}}n(753);t.FullPageLoading=function(){return a.default.createElement("div",{className:"loading_container"},a.default.createElement(r.default,{size:"large"}))}},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var r=n(661),a=i(n(662)),o=i(n(247));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.reducer=r.reducer,t.actionCreators=a,t.constants=o},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deleteArticleAndNotebookAsyncAC=t.publishAsyncAC=t.updateCertainArticleAC=t.getNotesDetailAsyncAC=t.autoSaveFunctionAC=t.saveArticleFunctionAC=t.requestDataFunctionAC=t.saveNotebookFunctionAC=t.changeStatus=void 0;var r=l(n(2)),a=l(n(147));n(146);var o=l(n(62)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(248)),u=n(35),c=n(36);function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e,t){return{type:i.CHANGE_STATUS,key:e,value:t}},d=function(e){return{type:i.UPDATE_CERTAIN_ARTICLE,article:e}},f=function(){return function(e){o.default.get(c.requestURL+"write/getNotes").then(function(t){var n=t.data,r=n.success,a=n.notebooks,o=n.articles;r&&e(s("data",(0,u.fromJS)({notebooks:a,articles:o})))}).catch()}},_=function(e,t,n){return function(r){o.default.post(c.requestURL+"write/saveArticle",t).then(function(t){var o=t.data,c=o.success,l=o.code,s=o.articles;o.articleId;if(c)switch(l){case 0:e(),r(function(e){return{type:i.UPDATE_ARTICLES,articles:e}}((0,u.fromJS)(s))),a.default.info("已"+(n?"自动":"")+"创建新文章！",3)}}).catch(function(e){console.log(e)})}};t.changeStatus=s,t.saveNotebookFunctionAC=function(e,t){return function(n){o.default.post(c.requestURL+"write/saveNotebook",{notebookName:t}).then(function(t){var r=t.data,o=r.success,i=r.code,u=r.notebookId;if(o)switch(i){case 0:e(),a.default.success("创建成功！",3),n(f()),n(_(a.default.info("为新文集自动创建文章……"),{notebookId:u,articleName:(new Date).toLocaleString(),articleContent:"",finished:!1},!0));break;case 1:e(),a.default.error("创建失败！原因：文集名重复",3)}}).catch(function(e){console.log(e)})}},t.requestDataFunctionAC=f,t.saveArticleFunctionAC=_,t.autoSaveFunctionAC=function(e){return function(t){t(s("autoSaving",!0)),o.default.post(c.requestURL+"write/autoSave",e).then(function(n){var r=n.data,a=r.success,o=r.code;if(a)switch(o){case 1:t(s("autoSaving",!1)),"finished"===e.updateType&&t(d({articleId:e.articleId,finished:e.finished}));break;case 0:console.log("更新失败，文章不存在")}}).catch(function(e){console.log(e)})}},t.getNotesDetailAsyncAC=function(e,t){return function(t){t(s("loading",!0)),t(s("requestArticleId",e)),o.default.get(c.requestURL+"write/getDetail?articleId="+e).then(function(e){var n=e.data,r=n.success,a=n.article,o=n.article;o.articleName,o.articleContent,r&&(t(d(a)),t(s("loading",!1)))}).catch(function(e){console.log(e)})}},t.updateCertainArticleAC=d,t.publishAsyncAC=function(e){return function(t){t(s("modelOkText","发布中……")),o.default.post(c.requestURL+"write/publish",e).then(function(n){t(d((0,r.default)({},e,{finished:!0,publishSite:n.data.publishSite}))),t(s("pubPanelShow",!1)),t(s("modelOkText","发布"))}).catch(function(e){console.log(e)})}},t.deleteArticleAndNotebookAsyncAC=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a.default.loading("正在删除"+(t?"文集独子":"文章"));return function(r){o.default.get(t?c.requestURL+"write/delArticle?articleId="+e+"&notebookId="+t:c.requestURL+"write/delArticle?articleId="+e).then(function(o){r(s("currentArticleId",0)),r(s("initOpen",!0)),r(function(e,t){return{type:i.DELETE_ARTICLE_AND_NOTEBOOK,articleId:e,notebookId:t}}(e,t)),n(),a.default.info(t?"删除成功，所属文集也删除了！":"删除成功！",2)}).catch()}}},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.actionCreators=t.reducer=void 0;var r=n(588),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(589));t.reducer=r.reducer,t.actionCreators=a},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var r=n(35),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(95));var o=(0,r.fromJS)({authorNickname:"",title:"",content:"",createTime:"",updateTime:""});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.GET_DETAIL_DATA:return e.merge({authorNickname:(0,r.fromJS)(t.data.authorNickname),title:(0,r.fromJS)(t.data.title),content:(0,r.fromJS)(t.data.content),createTime:(0,r.fromJS)(t.data.createTime),updateTime:(0,r.fromJS)(t.data.updateTime)});default:return e}}},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDetailDataFunctionAC=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(62)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(95)),o=n(36);t.getDetailDataFunctionAC=function(e){return function(t){r.default.get(o.requestURL+"getDetail?articleId="+e).then(function(e){var n=e.data,r=n.code,o=n.article,i=n.author;switch(r){case 0:break;case 1:var u=o.articleName,c=o.articleContent,l=o.createTime,s=o.updateTime,d=i.nickname;t(function(e){return{type:a.GET_DETAIL_DATA,data:e}}({authorNickname:d,title:u,content:c,createTime:l,updateTime:s}))}}).catch(function(e){console.log(e)})}}},247:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHANGE_USER_INPUT="change_user_input"},248:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SAVE_CURRENT_ARTICLE="save_current_article",t.SAVE_CURRENT_TITLE="save_current_title",t.CHANGE_STATUS="change_status",t.UPDATE_ARTICLES="update_articles",t.UPDATE_CERTAIN_ARTICLE="update_certain_article",t.DELETE_ARTICLE_AND_NOTEBOOK="delete_article_and_notebook"},249:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var r=n(35),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(96));var o=(0,r.fromJS)({articlelist:[],nextPage:0,showSearchResult:!0,hasMore:!0,keyword:"",searchType:"keyword"});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.ADD_PAGE:return e.set("nextPage",t.page);case a.UPDATE_ARTICLES_IN_SEARCH:return e.set("articlelist",e.get("articlelist").concat((0,r.fromJS)(t.articles)));case a.CHANGE_KEYWORD:return e.merge({searchType:t.searchType,keyword:t.keyword});case a.CHANGE_SEARCH_RESULT_SHOW:return e.set("showSearchResult",t.showSearchResult);case a.CHANGE_HAS_MORE:return e.set("hasMore",t.hasMore);default:return e}}},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeKeywordAndTypeAC=t.searchAsyncAC=void 0;var r=c(n(2)),a=c(n(80)),o=c(n(62)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(96)),u=n(36);function c(e){return e&&e.__esModule?e:{default:e}}t.searchAsyncAC=function(e){return function(t){o.default.get(u.requestURL+"search/search"+location.search+"&page="+e).then(function(n){var o=n.data,u=o.code,c=o.articles,l=o.usersWithoutRepeat;switch(u){case 1:var s=c.map(function(e){var t=!0,n=!1,o=void 0;try{for(var i,u=(0,a.default)(l);!(t=(i=u.next()).done);t=!0){var c=i.value,s=c.id,d=c.nickname;if(void 0===e.nickname&&e.authorId===s)return(0,r.default)({},e,{nickname:d})}}catch(e){n=!0,o=e}finally{try{!t&&u.return&&u.return()}finally{if(n)throw o}}});t(function(e){return{type:i.UPDATE_ARTICLES_IN_SEARCH,articles:e}}(s));break;case 0:0===e&&t(function(e){return{type:i.CHANGE_SEARCH_RESULT_SHOW,showSearchResult:e}}(!1)),t(function(e){return{type:i.CHANGE_HAS_MORE,hasMore:e}}(!1))}}).catch(function(e){console.log(e)}),t(function(e,t){return{type:i.ADD_PAGE,page:e+t}}(e,1))}},t.changeKeywordAndTypeAC=function(e,t){return{type:i.CHANGE_KEYWORD,searchType:e,keyword:t}}},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_WRITTER_LIST="get_writter_list",t.CHANGE_WRITTER_LIST="change_writter_list",t.GET_INITIAL_HOME_DATA="get_initial_home_data",t.GET_MORE_ARTICLE="get_more_article",t.CHANGE_SCROLL_TOP_STATE="change_scroll_top_state",t.INCREASE_REQUEST_PAGE="increase_request_page",t.CHANGE_HAS_MORE_IN_HOME="change_has_more_in_home",t.GET_ARTICLES="get_articles",t.RESET_DATA="reset_data"},540:function(e,t,n){"use strict";var r=i(n(1)),a=i(n(10)),o=n(548);function i(e){return e&&e.__esModule?e:{default:e}}n(755),n(757),window.navigator.userAgent.indexOf("MSIE 9.0")>0&&n.e(7).then(n.t.bind(null,183,7)),a.default.render(r.default.createElement(o.App,null),document.body.appendChild(document.createElement("main")))},548:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var r=g(n(15)),a=g(n(6)),o=g(n(8)),i=g(n(5)),u=g(n(7)),c=g(n(1)),l=n(19),s=n(28),d=g(n(587)),f=g(n(645)),_=g(n(649)),m=g(n(650)),p=g(n(651)),h=g(n(652)),v=n(653);function g(e){return e&&e.__esModule?e:{default:e}}var E=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return c.default.createElement(l.Provider,{store:v.store},c.default.createElement(s.BrowserRouter,null,c.default.createElement(c.default.Fragment,null,c.default.createElement(s.Route,{path:"/",exact:!0,component:d.default}),c.default.createElement(s.Route,{path:"/login",exact:!0,component:_.default}),c.default.createElement(s.Route,{path:"/sign_up",exact:!0,component:m.default}),c.default.createElement(s.Route,{path:"/detail/:id",exact:!0,component:f.default}),c.default.createElement(s.Route,{path:"/write",exact:!0,component:p.default}),c.default.createElement(s.Route,{path:"/search",exact:!0,component:h.default}))))}}]),t}(c.default.Component);t.App=E},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var r=n(663),a=i(n(145)),o=i(n(248));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.reducer=r.reducer,t.actionCreators=a,t.constants=o},587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(15)),a=p(n(6)),o=p(n(8)),i=p(n(5)),u=p(n(7)),c=p(n(1)),l=n(19),s=n(241),d=p(n(65)),f=n(634),_=p(n(643)),m=p(n(644));function p(e){return e&&e.__esModule?e:{default:e}}n(751);var h=function(e){function t(){var e,n,o,u;(0,a.default)(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=o=(0,i.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(l))),o.bindEvents=function(){window.addEventListener("scroll",o.props.changeScrollShowState)},u=n,(0,i.default)(o,u)}return(0,u.default)(t,e),(0,o.default)(t,[{key:"componentWillMount",value:function(){this.props.getInitialData(this.props.requestPage)}},{key:"componentDidMount",value:function(){this.bindEvents()}},{key:"componentWillUnmount",value:function(){this.props.resetData(),window.removeEventListener("scroll",this.props.changeScrollShowState)}},{key:"render",value:function(){return c.default.createElement(c.default.Fragment,null,c.default.createElement(d.default,null),c.default.createElement("div",{className:"content_container"},c.default.createElement("section",{className:"content_left"},c.default.createElement(f.FocusImg,{speed:2e3,imgWidth:625,loop:!0,totalImgCount:3,imgSource:this.props.focusImgData.toJS()}),c.default.createElement(_.default,null),c.default.createElement(m.default,null)),this.props.backTopShow?c.default.createElement("div",{className:"backTop"},c.default.createElement("a",{className:"backTop_btn",onClick:this.props.scrollToTop},c.default.createElement("div",{className:"backTop_btn_content"}))):null))}}]),t}(c.default.Component);t.default=(0,l.connect)(function(e){return{backTopShow:e.getIn(["home","backTopShow"]),requestPage:e.getIn(["home","nextPage"]),focusImgData:e.getIn(["home","focusImg"])}},function(e){return{getInitialData:function(t){e(s.actionCreators.getHomeData(t))},scrollToTop:function(){window.scrollTo(0,0)},changeScrollShowState:function(){document.documentElement.scrollTop>300?e(s.actionCreators.changeScrollShowStateAC(!0)):e(s.actionCreators.changeScrollShowStateAC(!1))},resetData:function(){e(s.actionCreators.resetDataAC())}}})(h)},588:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var r=n(35),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(304));var o=(0,r.fromJS)({topicList:[],articlelist:[],focusImg:[],recommendList:[],writterList:[],nextPage:0,backTopShow:!1,hasMore:!0});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.CHANGE_WRITTER_LIST:return e.set("writterList",t.data);case a.GET_INITIAL_HOME_DATA:return e.merge({topicList:e.get("topicList").concat((0,r.fromJS)(t.topic)),articlelist:e.get("articlelist").concat((0,r.fromJS)(t.articles)),focusImg:e.get("focusImg").concat((0,r.fromJS)(t.focusImg))});case a.GET_MORE_ARTICLE:return e.merge({articlelist:e.get("articlelist").concat(t.data),nextPage:t.nextPage});case a.CHANGE_SCROLL_TOP_STATE:return e.set("backTopShow",t.state);case a.INCREASE_REQUEST_PAGE:return e.set("nextPage",t.page);case a.CHANGE_HAS_MORE_IN_HOME:return e.set("hasMore",t.hasMore);case a.RESET_DATA:return e.merge({nextPage:0,topicList:(0,r.fromJS)([]),articlelist:(0,r.fromJS)([]),focusImg:(0,r.fromJS)([])});case a.GET_ARTICLES:return e.set("articlelist",e.get("articlelist").concat(t.articles));default:return e}}},589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetDataAC=t.changeScrollShowStateAC=t.getMoreList=t.getHomeData=t.getWritterList=void 0;var r=c(n(2)),a=c(n(62)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(304)),i=n(35),u=n(36);function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e,t,n){for(var r=arguments.length,o=Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];a.default.get(e).then(function(e){var r=e.data,a=r.success,i=r.data;if(a){var u=n.apply(void 0,[i].concat(o));t(u)}}).catch(function(e){console.log(e)})},s=function(e){return{type:o.CHANGE_WRITTER_LIST,data:(0,i.fromJS)(e)}},d=function(e,t){return{type:o.GET_MORE_ARTICLE,data:(0,i.fromJS)(e),nextPage:t+1}};t.getWritterList=function(){return function(e){l("http://localhost:5499/api/writterList",e,s)}},t.getHomeData=function(e){return function(t){a.default.get(u.requestURL+"api/homeArticles?page="+e).then(function(e){var n=e.data,a=n.code,u=n.articles,c=n.users,l=n.topic,s=n.focusImg;switch(a){case 1:var d=u.map(function(e){var t=c.find(function(t){return t.id===e.authorId}).nickname;return(0,r.default)({},e,{nickname:t})});t(void 0!==l?function(e,t,n){return{type:o.GET_INITIAL_HOME_DATA,articles:e,topic:t,focusImg:n}}(d,l,s):function(e){return{type:o.GET_ARTICLES,articles:(0,i.fromJS)(e)}}(d));break;case 0:t(function(e){return{type:o.CHANGE_HAS_MORE_IN_HOME,hasMore:e}}(!1))}}).catch(function(e){console.log(e)}),t(function(e,t){return{type:o.INCREASE_REQUEST_PAGE,page:e+t}}(e,1))}},t.getMoreList=function(e){return function(t){l("http://localhost:5499/api/morehomelist?page="+e,t,d,e)}},t.changeScrollShowStateAC=function(e){return{type:o.CHANGE_SCROLL_TOP_STATE,state:e}},t.resetDataAC=function(){return{type:o.RESET_DATA}}},634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FocusImg=void 0;var r=f(n(18)),a=f(n(54)),o=f(n(15)),i=f(n(6)),u=f(n(8)),c=f(n(5)),l=f(n(7)),s=f(n(1)),d=n(642);function f(e){return e&&e.__esModule?e:{default:e}}n(745);var _=window.navigator.userAgent.indexOf("MSIE 9.0")>0;"classList"in document.documentElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var e=this;function t(t){return function(n){var r=e.className.split(/\s+/g),a=r.indexOf(n);t(r,a,n),e.className=r.join(" ")}}return{add:t(function(e,t,n){~t||e.push(n)}),remove:t(function(e,t){~t&&e.splice(t,1)}),toggle:t(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(t){return!!~e.className.split(/\s+/g).indexOf(t)},item:function(t){return e.className.split(/\s+/g)[t]||null}}}});var m=function(e){function t(){var e,n,u,l;(0,i.default)(this,t);for(var s=arguments.length,d=Array(s),f=0;f<s;f++)d[f]=arguments[f];return n=u=(0,c.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(d))),u.state={timer:null,imgContainer:null,imgItems:null,currentIndex:0,indicatorContainer:null,indicatorItems:null,ie9Move:null},u.runTimer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=setInterval(function(){e=e===u.props.totalImgCount-1?0:e+1,u.imgContainerMove(e),u.setIndicatorAcitve(e),u.setState({currentIndex:e})},u.props.speed);u.setState({timer:t})},u.imgContainerMove=function(e){_?u.state.ie9Move.move("linear",{left:-u.props.imgWidth*e},300):u.state.imgContainer.style.transform="translateX("+-u.props.imgWidth*e+"px)"},u.HandleIndicatorClick=function(e){if("LI"!==e.target.tagName)return!1;clearInterval(u.state.timer);var t=u.getItemIndexInParent(u.state.indicatorContainer,"li",e);u.imgContainerMove(t),u.setIndicatorAcitve(t),u.setState({currentIndex:t}),u.runTimer(t)},u.handleMouseEnter=function(e){setTimeout(function(){clearInterval(u.state.timer)},0)},u.handleMouseLeave=function(){clearInterval(u.state.timer),u.runTimer(u.state.currentIndex)},u.handleArrowClick=function(e){var t=0;t=/left/.test(e.target.className)?u.props.loop?u.state.currentIndex-1<0?u.props.totalImgCount-1:u.state.currentIndex-1:u.state.currentIndex-1<0?0:u.state.currentIndex-1:u.props.loop?u.state.currentIndex+1>=u.props.totalImgCount?0:u.state.currentIndex+1:u.state.currentIndex+1>=u.props.totalImgCount?u.props.totalImgCount-1:u.state.currentIndex+1,u.imgContainerMove(t),u.setIndicatorAcitve(t),u.setState({currentIndex:t})},u.setIndicatorAcitve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.state.indicatorItems,n=t.find(function(e){return e.classList.contains("active")});n&&n.classList.remove("active"),t[e].classList.add("active")},u.getItemIndexInParent=function(e,t,n){for(var o=[].concat((0,a.default)(e.querySelectorAll(t))),i=function(e){if(e.tagName.toLowerCase()===t)return{v:o.findIndex(function(t){return t===e})}},u=n.target;u!==n.currentTarget;u=u.parentElement){var c=i(u);if("object"===(void 0===c?"undefined":(0,r.default)(c)))return c.v}},l=n,(0,c.default)(u,l)}return(0,l.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({imgItems:[].concat((0,a.default)(this.state.imgContainer.querySelectorAll("li"))),indicatorItems:[].concat((0,a.default)(this.state.indicatorContainer.querySelectorAll("li")))},function(){e.setIndicatorAcitve(e.state.currentIndex)}),this.runTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"componentDidUpdate",value:function(){var e=this;this.setState({indicatorContainer:document.querySelector(".foucsImg_indicator"),indicatorItems:[].concat((0,a.default)(document.querySelectorAll(".indicator_item"))),ie9Move:_?new d.Move(this.state.imgContainer):null},function(){e.setIndicatorAcitve(e.state.currentIndex)})}},{key:"shouldComponentUpdate",value:function(e,t){return e.imgSource!==this.props.imgSource||t.indicatorContainer!==this.state.indicatorContainer}},{key:"render",value:function(){var e=this,t=this.props,n=t.imgWidth,r=t.totalImgCount;return s.default.createElement("section",{className:"banner_foucsImg"},s.default.createElement("ul",{className:"foucsImg_container",style:{width:_?n*r:n},ref:function(t){e.state.imgContainer=t},onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.props.imgSource.map(function(e){return s.default.createElement("li",{className:"foucsImg_item",key:e.id},s.default.createElement("a",{href:"/detail/"+e.id,target:"_blank",className:"foucsImg_link"},s.default.createElement("img",{src:e.img,className:"banner_img"})))})),s.default.createElement("ul",{className:"foucsImg_indicator",onClick:this.HandleIndicatorClick,ref:function(t){e.state.indicatorContainer=t}},function(){for(var e=[],t=0;t<r;t++)e.push(s.default.createElement("li",{className:"indicator_item",key:Math.random(),style:{width:_?(200-6*r)/r:"auto"}}));return e}()),s.default.createElement("div",{className:"arrow_left switchControl",onClick:this.handleArrowClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},"<"),s.default.createElement("div",{className:"arrow_right switchControl",onClick:this.handleArrowClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},">"))}}]),t}(s.default.Component);t.FocusImg=m},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Move=void 0;var r=o(n(6)),a=o(n(8));function o(e){return e&&e.__esModule?e:{default:e}}window.requestAnimationFrame||(window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return window.setTimeout(e,17)}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)});var i=function(){function e(t){(0,r.default)(this,e),this.el=t,this.timer=void 0}return(0,a.default)(e,[{key:"getStyle",value:function(e,t){return window.getComputedStyle?getComputedStyle(e)[t]:e.currentStyle[t]}},{key:"changeStyle",value:function(e,t,n){"opacity"==t?(e.style.opacity=n/100,e.style.filter="alpha(opacity="+n+")"):e.style[t]=n+"px"}},{key:"_linearMove",value:function(){var e=this.times,t=+new Date-this.startTime;for(var n in this.json)if(this.json.hasOwnProperty(n)){var r=this.iCur[n],a=t*((this.json[n]-this.iCur[n])/e)+r;this.changeStyle(this.el,n,a)}if(t<=e)this.timer=requestAnimationFrame(this._linearMove.bind(this));else for(var o in cancelAnimationFrame(this.timer),this.json)this.json.hasOwnProperty(o)&&this.changeStyle(this.el,o,this.json[o])}},{key:"cancelMove",value:function(){cancelAnimationFrame(this.timer)}},{key:"move",value:function(e,t,n){for(var r in this.json=t,this.startTime=+new Date,this.iCur={},this.times=n,t)t.hasOwnProperty(r)&&(this.iCur[r]="opacity"===r?Math.round(100*this.getStyle(this.el,r)):parseInt(this.getStyle(this.el,r)));switch(e){case"linear":this.timer=requestAnimationFrame(this._linearMove.bind(this))}}}]),e}();t.Move=i},643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(15)),a=d(n(6)),o=d(n(8)),i=d(n(5)),u=d(n(7)),c=d(n(1)),l=n(28),s=n(19);function d(e){return e&&e.__esModule?e:{default:e}}n(747);var f=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.topicList;return c.default.createElement("section",{className:"topic_container"},c.default.createElement("ul",{className:"topic_list"},e.map(function(e){return c.default.createElement("li",{className:"topic_item",key:e.get("id")},c.default.createElement(l.Link,{className:"topic_link",to:"/search?category="+e.get("title"),target:"_blank"},c.default.createElement("img",{src:e.get("img"),className:"topic_img"}),c.default.createElement("span",{className:"topic_text"},e.get("title"))))})))}}]),t}(c.default.Component);t.default=(0,s.connect)(function(e){return{topicList:e.getIn(["home","topicList"])}},null)(f)},644:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(19),o=n(241),i=n(97);t.default=(0,a.connect)(function(e){return{articlelist:e.getIn(["home","articlelist"]),requestPage:e.getIn(["home","nextPage"]),hasMore:e.getIn(["home","hasMore"])}},function(e){return{loadmore:function(t){e(o.actionCreators.getHomeData(t))}}})(function(e){return r.default.createElement(i.DumbList,e)})},645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(136)),o=n(137);function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({loader:function(){return n.e(8).then(n.t.bind(null,131,7))},loading:function(){return r.default.createElement(o.FullPageLoading,null)}});t.default=function(){return r.default.createElement(u,null)}},649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(136)),o=n(137);function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({loader:function(){return n.e(9).then(n.t.bind(null,184,7))},loading:function(){return r.default.createElement(o.FullPageLoading,null)}});t.default=function(){return r.default.createElement(u,null)}},650:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(136)),o=n(137);function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({loader:function(){return n.e(10).then(n.t.bind(null,185,7))},loading:function(){return r.default.createElement(o.FullPageLoading,null)}});t.default=function(){return r.default.createElement(u,null)}},651:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(136)),o=n(137);function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.t.bind(null,186,7))},loading:function(){return r.default.createElement(o.FullPageLoading,null)}});t.default=function(){return r.default.createElement(u,null)}},652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=i(n(136)),o=n(137);function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,a.default)({loader:function(){return n.e(12).then(n.t.bind(null,130,7))},loading:function(){return r.default.createElement(o.FullPageLoading,null)}});t.default=function(){return r.default.createElement(u,null)}},653:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;var r=n(257),a=i(n(654)),o=i(n(655));function i(e){return e&&e.__esModule?e:{default:e}}var u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.compose,c=(0,r.createStore)(o.default,u((0,r.applyMiddleware)(a.default)));t.store=c},655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(656),a=n(129),o=n(241),i=n(98),u=n(79),c=n(144),l=n(55),s=n(99);t.default=(0,r.combineReducers)({header:a.reducer,home:o.reducer,detail:i.reducer,login:u.reducer,signUp:c.reducer,write:l.reducer,search:s.reducer})},661:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var r=n(35),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(247));var o=(0,r.fromJS)({msg:"",nickname:"",username:"",password:"",buttonStatus:"注册"});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case a.CHANGE_USER_INPUT:return e.set(t.key,t.value);default:return e}}},662:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.signUpFunctionalAC=t.changeUserInput=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(62)),a=n(79),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(247)),i=n(36);var u=function(e,t){return{type:o.CHANGE_USER_INPUT,key:e,value:t}};t.changeUserInput=u,t.signUpFunctionalAC=function(e,t,n){var o={nickname:e,username:t,password:n};return function(t){r.default.post(i.requestURL+"user/sign_up",o).then(function(n){var r=n.data,o=r.success,i=r.id,c=r.code;if(o)switch(c){case 1:t(u("msg","用户名重复，sorry！")),t(u("buttonStatus","注册")),setTimeout(function(){t(u("msg",""))},2e3);break;case 0:t(u("msg","注册成功，欢迎你，"+e+"！正在跳转至首页···")),t(a.actionCreators.changeLoginStatus(!0)),t(a.actionCreators.changeLoggedUserInfo(i,e)),t(u("buttonStatus","注册"))}}).catch(function(e){console.log(e)})}}},663:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(305)),a=n(35),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(248));var i=(0,a.fromJS)({data:{notebooks:[{notebookId:0,notebookName:"加载中……"}],articles:[{articleId:1,notebookId:0,articleName:"加载中……"}]},showInput:!1,createInputValue:"",articleBtnDisabled:!0,currentSelectedNotebookId:0,currentArticleTitle:"",currentArticleContent:"",currentArticleId:0,requestArticleId:0,initOpen:!0,editor:null,loading:!1,createType:"note",autoSaving:!1,pubPanelShow:!1,modelOkText:"发布"});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case o.SAVE_CURRENT_ARTICLE:return e.setIn(["currentArticle","articleId"],t.id).setIn(["currentArticle","content"],t.content);case o.SAVE_CURRENT_TITLE:return e.setIn(["currentArticle","articleId"],t.id).setIn(["currentArticle","title"],t.title);case o.CHANGE_STATUS:return e.set(t.key,t.value);case o.UPDATE_ARTICLES:return e.setIn(["data","articles"],t.articles);case o.UPDATE_CERTAIN_ARTICLE:return function(e,t){var n=e.toJS(),o=n.data.articles.find(function(e){return e.articleId===t.articleId});return(0,r.default)(o,t),(0,a.fromJS)(n)}(e,t.article);case o.DELETE_ARTICLE_AND_NOTEBOOK:return function(e,t,n){var r=e.toJS(),o=r.data,i=o.articles,u=o.notebooks;if(n){var c=u.findIndex(function(e){return e.notebookId===n});u.splice(c,1)}var l=i.findIndex(function(e){return e.articleId===t});return i.splice(l,1),(0,a.fromJS)(r)}(e,t.articleId,t.notebookId);default:return e}}},745:function(e,t){},747:function(e,t){},749:function(e,t){},751:function(e,t){},753:function(e,t){},755:function(e,t){},757:function(e,t){},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_DETAIL_DATA="get_detail_data"},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_PAGE="add_page",t.UPDATE_ARTICLES_IN_SEARCH="update_articles_in_search",t.CHANGE_KEYWORD="change_keyword",t.CHANGE_SEARCH_RESULT_SHOW="change_search_result_show",t.CHANGE_HAS_MORE="change_has_more"},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DumbList=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),a=n(28);n(749);t.DumbList=function(e){return r.default.createElement("section",{className:"articlelist_container"},r.default.createElement("ul",{className:"articlelist_list"},e.articlelist.map(function(e,t){return r.default.createElement("li",{className:"articlelist_Item",key:t},r.default.createElement("div",{className:"articlelist_summary"},r.default.createElement(a.Link,{to:"/detail/"+e.get("articleId"),className:"summary_title",target:"_blank"},e.get("articleName")),r.default.createElement("p",{className:"summary_content"},e.get("description")),r.default.createElement("div",{className:"summary_extraInfo"},r.default.createElement("a",{className:"extraInfo_author",target:"_blank"},e.get("nickname")),r.default.createElement("span",{className:"extraInfo_comments",target:"_blank"},r.default.createElement("span",{className:"iconfont icon-duihuakuang1"},"创作于",e.get("createTime"))),e.get("updateTime")?r.default.createElement("span",{className:"extraInfo_likes"},r.default.createElement("span",{className:"iconfont icon-xin"},"更新于",e.get("updateTime"))):null)))})),e.hasMore?r.default.createElement("a",{className:"articlelist_loadmore",onClick:function(){e.loadmore(e.requestPage)}},"阅读更多"):r.default.createElement("a",{className:"articlelist_loadmore"},"没有更多啦！"))}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var r=n(245),a=i(n(246)),o=i(n(95));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.reducer=r.reducer,t.actionCreators=a,t.constants=o},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var r=n(249),a=i(n(250)),o=i(n(96));function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.reducer=r.reducer,t.actionCreators=a,t.constants=o}},[[540,1,0,2]]]);