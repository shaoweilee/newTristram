(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{158:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var r=a(24),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(54));var c=(0,r.fromJS)({articlelist:[],nextPage:0,showSearchResult:!0,hasMore:!0,keyword:"",searchType:"keyword"});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];switch(t.type){case n.ADD_PAGE:return e.set("nextPage",t.page);case n.UPDATE_ARTICLES_IN_SEARCH:return e.set("articlelist",e.get("articlelist").concat((0,r.fromJS)(t.articles)));case n.CHANGE_KEYWORD:return e.merge({searchType:t.searchType,keyword:t.keyword});case n.CHANGE_SEARCH_RESULT_SHOW:return e.set("showSearchResult",t.showSearchResult);case n.CHANGE_HAS_MORE:return e.set("hasMore",t.hasMore);default:return e}}},159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeKeywordAndTypeAC=t.searchAsyncAC=void 0;var r=l(a(2)),n=l(a(48)),c=l(a(35)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(54)),o=a(25);function l(e){return e&&e.__esModule?e:{default:e}}t.searchAsyncAC=function(e){return function(t){c.default.get(o.requestURL+"search/search"+location.search+"&page="+e).then(function(a){var c=a.data,o=c.code,l=c.articles,u=c.usersWithoutRepeat;switch(o){case 1:var i=l.map(function(e){var t=!0,a=!1,c=void 0;try{for(var s,o=(0,n.default)(u);!(t=(s=o.next()).done);t=!0){var l=s.value,i=l.id,d=l.nickname;if(void 0===e.nickname&&e.authorId===i)return(0,r.default)({},e,{nickname:d})}}catch(e){a=!0,c=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw c}}});t(function(e){return{type:s.UPDATE_ARTICLES_IN_SEARCH,articles:e}}(i));break;case 0:0===e&&t(function(e){return{type:s.CHANGE_SEARCH_RESULT_SHOW,showSearchResult:e}}(!1)),t(function(e){return{type:s.CHANGE_HAS_MORE,hasMore:e}}(!1))}}).catch(function(e){console.log(e)}),t(function(e,t){return{type:s.ADD_PAGE,page:e+t}}(e,1))}},t.changeKeywordAndTypeAC=function(e,t){return{type:s.CHANGE_KEYWORD,searchType:e,keyword:t}}},195:function(e,t){},196:function(e,t){},420:function(e,t){},45:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotFound=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(a(1));a(195);t.NotFound=function(e){return r.default.createElement("div",{className:"not_container"},"keyword"===e.searchType?r.default.createElement("h1",{className:"not_description"},"抱歉，未找到与",r.default.createElement("span",{className:"not_keyword"},e.keyword),"相关的内容~"):r.default.createElement("h1",{className:"not_description"},"抱歉，",r.default.createElement("span",{className:"not_keyword"},e.keyword),"分类下暂无内容~"))}},54:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_PAGE="add_page",t.UPDATE_ARTICLES_IN_SEARCH="update_articles_in_search",t.CHANGE_KEYWORD="change_keyword",t.CHANGE_SEARCH_RESULT_SHOW="change_search_result_show",t.CHANGE_HAS_MORE="change_has_more"},55:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DumbList=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(a(1)),n=a(19);a(420);t.DumbList=function(e){return r.default.createElement("section",{className:"articlelist_container"},r.default.createElement("ul",{className:"articlelist_list"},e.articlelist.map(function(e,t){return r.default.createElement("li",{className:"articlelist_Item",key:t},r.default.createElement("div",{className:"articlelist_summary"},r.default.createElement(n.Link,{to:"/detail/"+e.get("articleId"),className:"summary_title",target:"_blank"},e.get("articleName")),r.default.createElement("p",{className:"summary_content"},e.get("description")),r.default.createElement("div",{className:"summary_extraInfo"},r.default.createElement("a",{className:"extraInfo_author",target:"_blank"},e.get("nickname")),r.default.createElement("span",{className:"extraInfo_comments",target:"_blank"},r.default.createElement("span",{className:"iconfont icon-duihuakuang1"},"创作于",e.get("createTime"))),e.get("updateTime")?r.default.createElement("span",{className:"extraInfo_likes"},r.default.createElement("span",{className:"iconfont icon-xin"},"更新于",e.get("updateTime"))):null)))})),e.hasMore?r.default.createElement("a",{className:"articlelist_loadmore",onClick:function(){e.loadmore(e.requestPage)}},"阅读更多"):r.default.createElement("a",{className:"articlelist_loadmore"},"没有更多啦！"))}},57:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var r=a(158),n=s(a(159)),c=s(a(54));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.reducer=r.reducer,t.actionCreators=n,t.constants=c},82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=h(a(10)),n=h(a(5)),c=h(a(7)),s=h(a(4)),o=h(a(6)),l=h(a(1)),u=h(a(38)),i=a(45),d=a(14),f=a(55),_=a(57);function h(e){return e&&e.__esModule?e:{default:e}}a(196);var m=function(e){function t(){return(0,n.default)(this,t),(0,s.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.props.loadmore(this.props.requestPage),this.props.changeKeyword()}},{key:"render",value:function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.default,null),l.default.createElement("section",{className:"search_container"},this.props.showSearchResult?l.default.createElement(l.default.Fragment,null,"keyword"===this.props.searchType?l.default.createElement("h1",{className:"search_h1"},"为您列出关键字是",l.default.createElement("span",null,this.props.keyword),"的搜索结果："):l.default.createElement("h1",{className:"search_h1"},"为您列出",l.default.createElement("span",null,this.props.keyword),"分类下的文章："),l.default.createElement(f.DumbList,this.props)):l.default.createElement(i.NotFound,{keyword:this.props.keyword,searchType:this.props.searchType})))}}]),t}(l.default.Component);t.default=(0,d.connect)(function(e){return{articlelist:e.getIn(["search","articlelist"]),requestPage:e.getIn(["search","nextPage"]),showSearchResult:e.getIn(["search","showSearchResult"]),keyword:e.getIn(["search","keyword"]),searchType:e.getIn(["search","searchType"]),hasMore:e.getIn(["search","hasMore"])}},function(e){return{loadmore:function(t){e(_.actionCreators.searchAsyncAC(t))},changeKeyword:function(){var t=decodeURI(location.search),a=t.match(/^\?(keyword|category)/i)[1];e(_.actionCreators.changeKeywordAndTypeAC(a,t.slice(t.indexOf("=")+1)))}}})(m)}},[[82,2,0,1]]]);
//# sourceMappingURL=search_923c05c8.js.map