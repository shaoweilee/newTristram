(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.actionCreators=t.constants=void 0;var a=n(624),r=u(n(243)),o=u(n(625));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.constants=r,t.actionCreators=o,t.reducer=a.reducer},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authentication=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(62)),r=n(36);t.authentication=function(){return a.default.get(r.requestURL+"user/authentication")}},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SEARCH_FOCUS="search_focus",t.SEARCH_BLUR="search_blur",t.CHANGE_LIST="change_list",t.MOUSE_ENTER="mouse_enter",t.MOUSE_LEAVE="mouse_leave",t.SWITCH_PAGE="switch_page",t.CHANGE_SEARCHVALUE="change_searchvalue"},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHANGE_USER_INFO="change_user_info",t.CHANGE_LOGIN_STATUS="change_login_status",t.CHANGE_MSG="change_msg",t.CHANGE_LOGGED_USER_INFO="change_logged_user_info"},245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=window.navigator.userAgent.indexOf("MSIE 9.0")>0,r=window.navigator.userAgent.indexOf("Trident")>0;t.ISIE=r,t.ISIE9=a},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.requestURL="http://www.herosanctuary.com/"},624:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var a=n(35),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(243));var o=(0,a.fromJS)({focused:!1,mouseIn:!1,list:[],page:1,totalPage:1,searchValue:""});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case r.SEARCH_FOCUS:return e.set("focused",!0);case r.SEARCH_BLUR:return e.set("focused",!1);case r.CHANGE_LIST:return e.merge({list:t.data,totalPage:t.totalPage});case r.MOUSE_ENTER:return e.set("mouseIn",!0);case r.MOUSE_LEAVE:return e.set("mouseIn",!1);case r.SWITCH_PAGE:return e.set("page",t.nextPage);case r.CHANGE_SEARCHVALUE:return e.set("searchValue",t.value);default:return e}}},625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeSearchValue=t.logout=t.switchPage=t.mouseLeave=t.mouseEnter=t.getList=t.search_focus_blur_action=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(62)),r=n(35),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(243)),u=n(79),c=n(36);t.search_focus_blur_action=function(e){return{type:e}},t.getList=function(){return function(e){a.default.get(c.requestURL+"api/getList").then(function(t){var n=t.data,a=n.success,u=n.data;a&&e(function(e){return{type:o.CHANGE_LIST,data:(0,r.fromJS)(e),totalPage:Math.ceil(e.length/10)}}(u))}).catch(function(e){console.log(e)})}},t.mouseEnter=function(){return{type:o.MOUSE_ENTER}},t.mouseLeave=function(){return{type:o.MOUSE_LEAVE}},t.switchPage=function(e){return{type:o.SWITCH_PAGE,nextPage:e}},t.logout=function(){return function(e){a.default.get(c.requestURL+"user/logout").then(function(t){t.data.code&&e(u.actionCreators.changeLoginStatus(!1))}).catch(function(e){console.log(e)})}},t.changeSearchValue=function(e){return{type:o.CHANGE_SEARCHVALUE,value:e}}},626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=void 0;var a=c(n(80)),r=c(n(142)),o=n(35),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(244));function c(e){return e&&e.__esModule?e:{default:e}}var s=(0,o.fromJS)({loginStatus:!1,msg:"",id:0,nickname:"",userInfo:{username:"",password:"",remember:!0}});t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case u.CHANGE_USER_INFO:var n=!0,o=!1,c=void 0;try{for(var l,i=(0,a.default)(t.userData);!(n=(l=i.next()).done);n=!0){var f=l.value,d=(0,r.default)(f,2),_=d[0],h=d[1];return e.setIn(["userInfo",_],h)}}catch(e){o=!0,c=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw c}}break;case u.CHANGE_LOGIN_STATUS:return e.set("loginStatus",t.status);case u.CHANGE_MSG:return e.set("msg",t.msg);case u.CHANGE_LOGGED_USER_INFO:return e.merge({id:t.id,nickname:t.nickname});default:return e}}},632:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.changeLoggedUserInfo=t.changeMsg=t.changeLoginStatus=t.loginFunctionalAC=t.changeUserInfo=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(244)),r=n(35),o=function(e){return e&&e.__esModule?e:{default:e}}(n(62)),u=n(36);o.default.defaults.withCredentials=!0;var c=function(e){return{type:a.CHANGE_LOGIN_STATUS,status:e}},s=function(e){return{type:a.CHANGE_MSG,msg:e}},l=function(e,t){return{type:a.CHANGE_LOGGED_USER_INFO,id:e,nickname:t}};t.changeUserInfo=function(e){return{type:a.CHANGE_USER_INFO,userData:(0,r.fromJS)(e)}},t.loginFunctionalAC=function(e){return function(t){o.default.post(u.requestURL+"user/login",e).then(function(e){var n=e.data,a=n.success,r=n.code,o=n.id,u=n.nickname;if(a)switch(r){case 0:t(s("登录成功！")),t(c(!0)),t(l(o,u));break;case 1:t(s("用户名不存在"));break;case 2:t(s("密码错误"))}}).catch()}},t.changeLoginStatus=c,t.changeMsg=s,t.changeLoggedUserInfo=l},634:function(e,t,n){e.exports=n.p+"85d0b383f3f98315786cac9d7bcf14bf.jpg"},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n(612)),r=v(n(15)),o=v(n(6)),u=v(n(8)),c=v(n(5)),s=v(n(7)),l=v(n(1)),i=n(28),f=n(19),d=n(617),_=n(129),h=n(79),g=n(143),m=n(245);n(744);var E=v(n(634)),p=n(36);function v(e){return e&&e.__esModule?e:{default:e}}var S=function(e){function t(){var e,n,a,u;(0,o.default)(this,t);for(var s=arguments.length,f=Array(s),d=0;d<s;d++)f[d]=arguments[d];return n=a=(0,c.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(f))),a.showSearch=function(){var e=a.props,t=e.focused,n=e.mouseIn,r=e.list,o=e.page,u=e.totalPage,c=e.handleMouseEnter,s=e.handleMouseLeave,f=e.handleSwitchClick,d=r.toJS(),_=[];if(d.length)for(var h=10*(o-1);h<(o<u?10*o:d.length);h++)_.push(l.default.createElement("li",{className:"contentItem",key:d[h]},l.default.createElement(i.Link,{className:"contentItem_link",to:{pathname:"/search",search:"keyword="+(m.ISIE?encodeURIComponent(d[h]):d[h])},target:"_blank"},d[h])));return t||n?l.default.createElement("div",{className:"search_info",onMouseEnter:c,onMouseLeave:s},l.default.createElement("div",{className:"search_wrapper"},l.default.createElement("div",{className:"title"},l.default.createElement("span",{className:"hot"},"热门搜索"),l.default.createElement("a",{className:"switch",onClick:function(){f(o,u,a.spinIcon)}},l.default.createElement("i",{ref:function(e){a.spinIcon=e},className:"iconfont icon-spinner9 spin"}),l.default.createElement("span",null,"换一批"))),l.default.createElement("ul",{className:"content"},_))):null},u=n,(0,c.default)(a,u)}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){this.props.checkLogin()}},{key:"render",value:function(){var e=this.props,t=e.loginStatus,n=e.focused,a=e.list,r=e.handleInputFoucus,o=e.handleInputBlur,u=e.logout,c=e.searchValue,s=e.handleSearchChange,f=e.handleInputKeyDown,_=e.handleSearchClick;return l.default.createElement("header",{className:"header"},l.default.createElement("nav",{className:"nav_container"},l.default.createElement("ul",{className:"nav"},l.default.createElement("li",null,l.default.createElement(i.Link,{className:"logo",to:"/"},l.default.createElement("img",{src:E.default,className:"logoPic",alt:"返回新崔斯特姆"}))),l.default.createElement("li",{className:"nav_padding"}),l.default.createElement("li",{className:"nav_middle"},l.default.createElement("div",{className:"nav_search_container"},l.default.createElement("div",{className:"inputWrapper"},l.default.createElement(d.CSSTransition,{in:n,timeout:300,classNames:"slide"},l.default.createElement("input",{placeholder:"搜索",onFocus:function(){r(a)},onBlur:o,value:c,onChange:s,onKeyDown:function(e){f(e,c)}})),l.default.createElement(d.CSSTransition,{in:n,timeout:300,classNames:"fade"},l.default.createElement("a",{className:"search_btn",href:"/search?keyword="+c,onClick:function(e){_(e,c)},target:"_blank"},l.default.createElement("i",{className:"iconfont icon-fangdajing"})))),this.showSearch(n))),l.default.createElement("li",{className:"nav_right"},t?l.default.createElement("a",{onClick:u,className:"login"},"退出"):l.default.createElement(i.Link,{to:"/login",className:"login"},"登录"),t?null:l.default.createElement(i.Link,{className:"signUp",to:"/sign_up"},"注册"),l.default.createElement(i.Link,{className:"write",to:"/write"},l.default.createElement("i",{className:"iconfont icon-icon-checkin"}),"写文章")))))}}]),t}(l.default.Component);t.default=(0,f.connect)(function(e){return{focused:e.getIn(["header","focused"]),list:e.getIn(["header","list"]),page:e.getIn(["header","page"]),totalPage:e.getIn(["header","totalPage"]),mouseIn:e.getIn(["header","mouseIn"]),searchValue:e.getIn(["header","searchValue"]),loginStatus:e.getIn(["login","loginStatus"])}},function(e){return{handleInputFoucus:function(t){0===t.size&&e(_.actionCreators.getList()),e(_.actionCreators.search_focus_blur_action(_.constants.SEARCH_FOCUS))},handleInputBlur:function(){e(_.actionCreators.search_focus_blur_action(_.constants.SEARCH_BLUR))},handleMouseEnter:function(){e(_.actionCreators.mouseEnter())},handleMouseLeave:function(){e(_.actionCreators.mouseLeave())},handleSwitchClick:function(t,n,r){var o=r.style.transform?r.style.transform.replace(/\D/gi,""):0;o=o?(0,a.default)(o,10):0,r.style.transform="rotate("+(360+o)+"deg)",e(t<n?_.actionCreators.switchPage(t+1):_.actionCreators.switchPage(1))},checkLogin:function(){(0,g.authentication)().then(function(t){var n=t.data;e(n?h.actionCreators.changeLoginStatus(!0):h.actionCreators.changeLoginStatus(!1))}).catch(function(e){console.log(e)})},logout:function(){e(_.actionCreators.logout())},handleSearchChange:function(t){var n=t.target.value;e(_.actionCreators.changeSearchValue(m.ISIE?encodeURIComponent(n):n))},handleInputKeyDown:function(e,t){13===e.keyCode&&""!==t.trim()&&window.open(p.requestURL+"search?keyword="+t,"_blank")},handleSearchClick:function(e,t){return""!==t.trim()||(e.preventDefault(),!1)}}})(S)},744:function(e,t){},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.constants=t.actionCreators=t.reducer=void 0;var a=n(626),r=u(n(632)),o=u(n(244));function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}t.reducer=a.reducer,t.actionCreators=r,t.constants=o}}]);