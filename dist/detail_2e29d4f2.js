(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var n=a(24),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(53));var i=(0,n.fromJS)({authorNickname:"",title:"",content:"",createTime:"",updateTime:""});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case r.GET_DETAIL_DATA:return e.merge({authorNickname:(0,n.fromJS)(t.data.authorNickname),title:(0,n.fromJS)(t.data.title),content:(0,n.fromJS)(t.data.content),createTime:(0,n.fromJS)(t.data.createTime),updateTime:(0,n.fromJS)(t.data.updateTime)});default:return e}}},155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDetailDataFunctionAC=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(a(35)),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(53)),i=a(25);t.getDetailDataFunctionAC=function(e){return function(t){n.default.get(i.requestURL+"getDetail?articleId="+e).then(function(e){var a=e.data,n=a.code,i=a.article,l=a.author;switch(n){case 0:break;case 1:var c=i.articleName,u=i.articleContent,o=i.createTime,d=i.updateTime,s=l.nickname;t(function(e){return{type:r.GET_DETAIL_DATA,data:e}}({authorNickname:s,title:c,content:u,createTime:o,updateTime:d}))}}).catch(function(e){console.log(e)})}}},197:function(e,t){},53:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_DETAIL_DATA="get_detail_data"},56:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var n=a(154),r=l(a(155)),i=l(a(53));function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}t.reducer=n.reducer,t.actionCreators=r,t.constants=i},83:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=m(a(10)),r=m(a(5)),i=m(a(7)),l=m(a(4)),c=m(a(6)),u=m(a(1)),o=a(14),d=a(19),s=a(56),f=m(a(38));function m(e){return e&&e.__esModule?e:{default:e}}a(197);var _=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.getDetailData(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.content,n=e.authorNickname,r=e.createTime,i=e.updateTime;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.default,null),u.default.createElement("section",{className:"article_container"},u.default.createElement("article",{className:"article_content"},u.default.createElement("h1",{className:"article_title"},t),u.default.createElement("aside",{className:"article_info"},u.default.createElement("div",{className:"info_author"},u.default.createElement("img",{className:"author_avator",alt:"",src:""})),u.default.createElement("div",{className:"info_detail"},u.default.createElement("div",{className:"author_detail"},u.default.createElement("span",{className:"detail_item author_name"},n),u.default.createElement("img",{className:"detail_item author_badge",alt:"",src:""}),u.default.createElement("a",{className:"detail_item author_follow"},"+关注")),u.default.createElement("div",{className:"article_detail"},u.default.createElement("span",{className:"detail_item article_time"},"创作于",r,"，"),u.default.createElement("span",{className:"detail_item article_updateTime"},"更新于",i,"。")))),u.default.createElement("section",{className:"article_text",dangerouslySetInnerHTML:{__html:a}}))))}}]),t}(u.default.Component);t.default=(0,o.connect)(function(e){return{title:e.getIn(["detail","title"]),content:e.getIn(["detail","content"]),authorNickname:e.getIn(["detail","authorNickname"]),createTime:e.getIn(["detail","createTime"]),updateTime:e.getIn(["detail","updateTime"])}},function(e){return{getDetailData:function(t){e(s.actionCreators.getDetailDataFunctionAC(t))}}})((0,d.withRouter)(_))}},[[83,2,0,1]]]);
//# sourceMappingURL=detail_2e29d4f2.js.map