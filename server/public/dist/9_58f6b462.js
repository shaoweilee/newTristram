(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=w(n(92)),i=w(n(43)),r=w(n(20)),o=w(n(130)),l=w(n(131)),c=w(n(48)),u=w(n(97)),d=w(n(10)),s=w(n(5)),f=w(n(7)),p=w(n(4)),h=w(n(6));n(44),n(29),n(133),n(122),n(96);var m=w(n(1)),v=n(14),b=w(n(123)),_=n(19),g=n(33),x=n(69),y=w(n(72)),C=w(n(76));n(79);var I=n(93),k=n(25);function w(e){return e&&e.__esModule?e:{default:e}}var S=function(e){function t(){var e,n,a,i;(0,s.default)(this,t);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return n=a=(0,p.default)(this,(e=t.__proto__||(0,d.default)(t)).call.apply(e,[this].concat(o))),a.state={currentFocus:"title"},a.getNewArticleId=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.props).currentArticleId},a.handleTitleFocus=function(){a.setState({currentFocus:"title"})},i=n,(0,p.default)(a,i)}return(0,h.default)(t,e),(0,f.default)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.requestData,n=u.default.loading("检查登录状态ing");(0,I.authentication)().then(function(a){a.data?(t(),n(),u.default.success("欢迎回来，英雄！",2)):(n(),u.default.error("英雄请留步，请您先登录~",2),e.props.history.push("/login"))}).catch(function(e){console.log(e)})}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.editor,n=e.currentArticleId,a=e.requestArticleId,i=e.articles;if("none"===this.state.currentFocus&&n===a){var r=i.toJS().find(function(e){var t=e.articleId;return n===t});r&&!r.autoSave&&t.txt.html(r.articleContent)}}},{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.handleContentChange,a=t.handleTitleChange,i=t.initEditor,r=new b.default(".editor_toolbar",".editor_text");r.customConfig.uploadImgServer=k.requestURL+"upload",r.customConfig.onfocus=function(){e.setState({currentFocus:"content"})};var o=[];r.customConfig.onchange=function(t){var a=e.getNewArticleId(),i=setTimeout(function(){if(o.length>1){o.pop();var i=!0,r=!1,l=void 0;try{for(var u,d=(0,c.default)(o);!(i=(u=d.next()).done);i=!0){var s=u.value;clearTimeout(s)}}catch(e){r=!0,l=e}finally{try{!i&&d.return&&d.return()}finally{if(r)throw l}}}else{var f=e.getNewArticleId();a===f&&n(t,a)}o=[]},1500);o.push(i)},r.create(),i(r);var l=[];this.titleInput.addEventListener("input",function(t){var n=t.target.value,i=e.getNewArticleId(),r=setTimeout(function(){if(l.length>1){l.pop();var t=!0,r=!1,o=void 0;try{for(var u,d=(0,c.default)(l);!(t=(u=d.next()).done);t=!0){var s=u.value;clearTimeout(s)}}catch(e){r=!0,o=e}finally{try{!t&&d.return&&d.return()}finally{if(r)throw o}}}else{var f=e.getNewArticleId();i===f&&a(n,i)}l=[]},1500);l.push(r)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.editor,a=t.notebooks,c=t.articles,u=t.showInput,d=t.handleBtnClick,s=t.getInputValue,f=t.createInputValue,p=t.handleConfirm,h=t.handleCancel,v=t.articleBtnDisabled,b=t.handleSelect,_=t.currentSelectedNotebookId,g=t.currentArticleId,I=t.initOpen,k=t.handleDelete,w=t.loading,S=t.createType,A=(l.default.Header,l.default.Content),E=(l.default.Footer,l.default.Sider),N=o.default.DirectoryTree,T=o.default.TreeNode,F=[],D=[];return a&&c&&(F=a.toJS(),D=c.toJS()),m.default.createElement(l.default,{className:"main"},m.default.createElement(E,{theme:"light",width:"300",className:"sider-fixed"},m.default.createElement(r.default,{block:!0,type:"primary",href:"/"},"回首页"),m.default.createElement(N,{defaultExpandAll:!0,expandAction:"doubleClick",onSelect:function(){for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];e.setState({currentFocus:"none"}),b(a,n,D,e.titleInput)}},F.map(function(e){return m.default.createElement(T,{title:e.notebookName,key:e.notebookId,isLeaf:!1},D.filter(function(t){return t.notebookId===e.notebookId}).map(function(e){var t=e.articleId,n=e.articleName;return m.default.createElement(T,{title:n,key:t,isLeaf:!0})}))})),m.default.createElement(r.default,{block:!0,onClick:function(){d("note")}},"新建文集"),m.default.createElement(r.default,{block:!0,onClick:function(){d("article")},disabled:v},v?"选中文集--新建文章":"新建文章"),m.default.createElement(r.default,{block:!0,onClick:function(){k(g,D,F)},type:"danger",disabled:!v||I},v?"删除文章":"选中文章--删除文章"),u?m.default.createElement(x.InputWithButtons,{getInputValue:s,createInputValue:f,handleConfirm:p,handleCancel:h,createType:S,currentSelectedNotebookId:_}):null),m.default.createElement(l.default,{style:{marginLeft:300}},m.default.createElement(A,{className:"editor_container"},m.default.createElement("div",{className:I?"show_mask":"hide_mask"},m.default.createElement("p",null,"选择文章以开始编辑")),m.default.createElement(i.default,{spinning:w},m.default.createElement("input",{type:"text",className:"editor_title",placeholder:"请输入标题",onFocus:this.handleTitleFocus,ref:function(t){e.titleInput=t}}),m.default.createElement("div",{className:"editor_border"},m.default.createElement("div",{className:"editor_toolbar"})),m.default.createElement("div",{className:"editor_text"}),m.default.createElement(y.default,{articlesData:D}),m.default.createElement(C.default,{articlesData:D})))))}}]),t}(m.default.Component);t.default=(0,v.connect)(function(e){return{editor:e.getIn(["write","editor"]),notebooks:e.getIn(["write","data","notebooks"]),articles:e.getIn(["write","data","articles"]),showInput:e.getIn(["write","showInput"]),createInputValue:e.getIn(["write","createInputValue"]),articleBtnDisabled:e.getIn(["write","articleBtnDisabled"]),currentSelectedNotebookId:e.getIn(["write","currentSelectedNotebookId"]),currentArticleId:e.getIn(["write","currentArticleId"]),requestArticleId:e.getIn(["write","requestArticleId"]),loading:e.getIn(["write","loading"]),createType:e.getIn(["write","createType"]),initOpen:e.getIn(["write","initOpen"])}},function(e){return{initEditor:function(t){e(g.actionCreators.changeStatus("editor",t))},requestData:function(){e(g.actionCreators.requestDataFunctionAC())},handleTitleChange:function(t,n){e(g.actionCreators.updateCertainArticleAC({articleName:t,articleId:n})),e(g.actionCreators.autoSaveFunctionAC({articleName:t,articleId:n,updateType:"articleName"}))},handleContentChange:function(t,n){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e(g.actionCreators.updateCertainArticleAC({articleContent:t,articleId:n,autoSave:a})),e(g.actionCreators.autoSaveFunctionAC({articleContent:t,articleId:n,updateType:"articleContent"}))},handleBtnClick:function(t){e(g.actionCreators.changeStatus("createType",t)),e(g.actionCreators.changeStatus("showInput",!0)),e(g.actionCreators.changeStatus("createInputValue",(new Date).toLocaleString()))},handleConfirm:function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];var i=n[0],r=n[1],o=n[2];if(i.trim()){var l=u.default.loading("创建中……");switch(r){case"note":e(g.actionCreators.saveNotebookFunctionAC(l,i));break;case"article":e(g.actionCreators.saveArticleFunctionAC(l,{notebookId:o,articleName:i,articleContent:"",finished:!1},!1))}e(g.actionCreators.changeStatus("showInput",!1))}},handleCancel:function(){e(g.actionCreators.changeStatus("showInput",!1))},getInputValue:function(t){e(g.actionCreators.changeStatus("createInputValue",t.target.value.replace(/\s+/g," ")))},handleSelect:function(t,n,i,r){var o=(0,a.default)(t,2),l=o[0],c=o[1].node.props,u=c.isLeaf,d=c.eventKey;if(u){var s=Number(l[0]);e(g.actionCreators.changeStatus("currentArticleId",s)),e(g.actionCreators.changeStatus("initOpen",!1));var f=i.find(function(e){return e.articleId===s});r.value=f.articleName,void 0!==f.articleContent?n.txt.html(f.articleContent):e(g.actionCreators.getNotesDetailAsyncAC(s,n))}else e(g.actionCreators.changeStatus("currentSelectedNotebookId",Number(d)));e(g.actionCreators.changeStatus("articleBtnDisabled",u))},handleDelete:function(t,n,a){var i=n.find(function(e){return e.articleId===t}).notebookId;1===n.filter(function(e){return e.notebookId===i}).length?e(g.actionCreators.deleteArticleAndNotebookAsyncAC(t,i)):e(g.actionCreators.deleteArticleAndNotebookAsyncAC(t))}}})((0,_.withRouter)(S))},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InputWithButtons=void 0;var a=l(n(20)),i=l(n(41));n(29),n(46);var r=l(n(1)),o=l(n(124));n(91);function l(e){return e&&e.__esModule?e:{default:e}}n(70),t.InputWithButtons=function(e){var t=e.getInputValue,n=e.createInputValue,l=e.handleConfirm,c=e.handleCancel,u=e.createType,d=e.currentSelectedNotebookId;return r.default.createElement("div",{className:"input_container",ref:function(e){e&&!e.classList.contains("show")&&setTimeout(function(){e.classList.add("show")},0)}},r.default.createElement(i.default,{placeholder:"请输入标题",ref:function(e){e&&document.activeElement!==e.input&&e.focus()},value:n,onChange:t}),r.default.createElement(o.default,{className:"input_btns"},r.default.createElement(a.default,{type:"default",onClick:function(){l(n,u,d)}},"确认"),r.default.createElement(a.default,{type:"danger",onClick:c},"取消")))}},70:function(e,t,n){var a=n(71);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},71:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".input_container {\n  margin-top: 20px;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  opacity: 0;\n  transform: scale(0.5) translateY(50%);\n  transition: all .3s ease; }\n  .input_container.show-enter {\n    opacity: 0.01; }\n  .input_container.show-enter-active {\n    opacity: 1;\n    transform: scale(1) translateY(0%);\n    transition: all .3s ease; }\n  .input_container.show-enter-done {\n    opacity: 1;\n    transform: scale(1) translateY(0%); }\n\n.show {\n  opacity: 1;\n  transform: scale(1) translateY(0%); }\n",""])},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(10)),i=p(n(5)),r=p(n(7)),o=p(n(4)),l=p(n(6)),c=p(n(1)),u=n(14),d=n(33),s=n(73),f=n(95);function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,i.default)(this,t),(0,o.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.articlesData,n=e.currentArticleId,a=e.autoSaving,i=e.btnClick,r=t.find(function(e){return e.articleId===n}),o=null;return r&&(o={btnText:r.finished?"取消发布":"发布",btnSpinning:!1,btnType:"primary",href:r.publishSite,disabled:!r.finished,handleBtnClick:function(){i(n,r.finished)}},a&&(o.btnText="保存中…",o.btnSpinning=!0,o.btnType="ghost",o.pubDisabled=!0)),c.default.createElement(c.default.Fragment,null,n?c.default.createElement(s.MutiStatesButton,{dumbProps:o}):null)}}]),t}(c.default.Component);t.default=(0,u.connect)(function(e){return{currentArticleId:e.getIn(["write","currentArticleId"]),autoSaving:e.getIn(["write","autoSaving"])}},function(e){return{btnClick:function(t,n){e(n?d.actionCreators.autoSaveFunctionAC({articleId:t,finished:!1,updateType:"finished"}):(0,f.changeStatus)("pubPanelShow",!0))}}})(h)},73:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MutiStatesButton=void 0;var a=s(n(20)),i=s(n(43)),r=s(n(10)),o=s(n(5)),l=s(n(7)),c=s(n(4)),u=s(n(6));n(29),n(44);var d=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}n(74);var f=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props.dumbProps,t=e.btnType,n=e.btnText,r=e.btnSpinning,o=e.handleBtnClick,l=e.href,c=e.disabled,u=e.pubDisabled;return d.default.createElement("div",{className:"publish_btn_container"},d.default.createElement(i.default,{size:"small",className:"publish_btn-loading",spinning:r}),d.default.createElement(a.default,{href:l,type:"primary",target:"_blank",disabled:c,className:"publish_btn_check"},"查看发布"),d.default.createElement(a.default,{type:t,block:!0,onClick:o,disabled:u,className:"publish_btn"},n))}}]),t}(d.default.Component);t.MutiStatesButton=f},74:function(e,t,n){var a=n(75);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},75:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,".publish_btn_container {\n  position: absolute;\n  right: 16px;\n  top: 60px;\n  width: 210px; }\n  .publish_btn_container .publish_btn, .publish_btn_container .publish_btn_check {\n    width: 100px; }\n  .publish_btn_container .publish_btn {\n    float: right; }\n  .publish_btn_container .publish_btn_check {\n    float: left; }\n  .publish_btn_container .publish_btn-loading {\n    position: absolute;\n    top: 50%;\n    right: 80px;\n    transform: translateY(-40%);\n    z-index: 1; }\n",""])},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n(2)),i=v(n(129)),r=v(n(128)),o=v(n(41)),l=v(n(10)),c=v(n(5)),u=v(n(7)),d=v(n(4)),s=v(n(6)),f=v(n(127));n(125),n(126),n(46),n(132);var p=v(n(1)),h=n(14),m=n(33);function v(e){return e&&e.__esModule?e:{default:e}}n(77);var b=f.default.Item,_=[{value:"编程",label:"编程",children:[{value:"JavaScript",label:"JavaScript"},{value:"CSS",label:"CSS"},{value:"HTML",label:"HTML"},{value:"React全家桶",label:"React全家桶"},{value:"小程序",label:"小程序"},{value:"Webpack",label:"Webpack"},{value:"nodejs",label:"nodejs"},{value:"linux",label:"linux"},{value:"规范解读",label:"规范解读"}]},{value:"其他",label:"其他"}],g=f.default.create({mapPropsToFields:function(e){return{articleName:f.default.createFormField({value:e.title})}}})(function(e){function t(){return(0,c.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.visible,n=e.onCancel,a=e.onCreate,l=e.form,c=e.modelOkText,u=l.getFieldDecorator;return p.default.createElement(i.default,{visible:t,title:"很快就可以发布了……",okText:c,cancelText:"取消",onCancel:n,onOk:a},p.default.createElement(f.default,{layout:"vertical"},p.default.createElement(b,{label:"标题"},u("articleName",{rules:[{required:!0,message:"请输入40字以内的标题！"}]})(p.default.createElement(o.default,{maxLength:40}))),p.default.createElement(b,{label:"分类"},u("class",{rules:[{required:!0,message:"请选择分类~"}]})(p.default.createElement(r.default,{options:_,placeholder:"请选择分类"}))),p.default.createElement(b,{label:"描述"},u("description",{rules:[{required:!0,message:"请输入140字以内的描述！"}]})(p.default.createElement(o.default.TextArea,{maxLength:140,placeholder:"请输入140字以内的描述"})))))}}]),t}(p.default.Component)),x=function(e){function t(){var e,n,a,i;(0,c.default)(this,t);for(var r=arguments.length,o=Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=a=(0,d.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(o))),a.handleCreate=function(){var e=a.formRef.props.form,t=a.props,n=t.currentArticleId;(0,t.handlePublish)(e,n)},a.saveFormRef=function(e){a.formRef=e},i=n,(0,d.default)(a,i)}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.articlesData,n=e.currentArticleId,a=e.pubPanelShow,i=e.handleCancel,r=e.handleFieldsChange,o=e.modelOkText,l=t.find(function(e){return e.articleId===n}),c=l?l.articleName:"";return p.default.createElement(g,{wrappedComponentRef:this.saveFormRef,visible:a,onCancel:i,onCreate:this.handleCreate,onChange:r,title:c.slice(0,40),modelOkText:o})}}]),t}(p.default.Component);t.default=(0,h.connect)(function(e){return{pubPanelShow:e.getIn(["write","pubPanelShow"]),currentArticleId:e.getIn(["write","currentArticleId"]),modelOkText:e.getIn(["write","modelOkText"])}},function(e){return{handleCancel:function(){e(m.actionCreators.changeStatus("pubPanelShow",!1))},handleFieldsChange:function(e){console.log(e)},handlePublish:function(t,n){t.validateFields(function(i,r){if(!i){var o=(0,a.default)({},r,{articleId:n});e(m.actionCreators.publishAsyncAC(o)),t.resetFields()}})}}})(x)},77:function(e,t,n){var a=n(78);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},78:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,"",""])},79:function(e,t,n){var a=n(80);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,i);a.locals&&(e.exports=a.locals)},80:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,'@charset "UTF-8";\n.main {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100; }\n  .main .sider-fixed {\n    position: fixed;\n    left: 0;\n    height: 100vh;\n    overflow: auto; }\n  .main .editor_container {\n    position: relative; }\n    .main .editor_container .show_mask {\n      display: flex;\n      width: 100%;\n      height: 100%;\n      background: #e3e3e3;\n      position: absolute;\n      z-index: 10002;\n      justify-content: center;\n      align-items: center;\n      font-size: 30px; }\n    .main .editor_container .hide_mask {\n      display: none; }\n    .main .editor_container .editor_title {\n      width: 100%;\n      padding: 20px 80px 10px 40px;\n      margin-bottom: 0;\n      border: none;\n      font-size: 30px;\n      font-weight: 400;\n      line-height: 30px;\n      text-align: center;\n      -webkit-box-shadow: none;\n      box-shadow: none;\n      color: #595959;\n      background-color: transparent;\n      outline: none;\n      border-radius: 0;\n      overflow: hidden;\n      -o-text-overflow: ellipsis;\n      text-overflow: ellipsis;\n      white-space: nowrap; }\n    .main .editor_container .editor_border {\n      border-bottom: 1px solid #ddd; }\n    .main .editor_container .editor_toolbar {\n      margin: 0 auto;\n      width: 980px; }\n    .main .editor_container .editor_text {\n      height: calc(100vh - 102px);\n      width: 1080px;\n      margin: 0 auto; }\n      .main .editor_container .editor_text > div:nth-of-type(1) {\n        padding: 50px;\n        overflow-y: auto;\n        font-size: 16px;\n        /* table 样式 */\n        /* blockquote 样式 */\n        /* code 样式 */\n        /* ul ol 样式 */ }\n        .main .editor_container .editor_text > div:nth-of-type(1) h1, .main .editor_container .editor_text > div:nth-of-type(1) h2, .main .editor_container .editor_text > div:nth-of-type(1) h3, .main .editor_container .editor_text > div:nth-of-type(1) h4, .main .editor_container .editor_text > div:nth-of-type(1) h5, .main .editor_container .editor_text > div:nth-of-type(1) h6 {\n          text-rendering: optimizelegibility;\n          line-height: 1.7;\n          margin: 0 0 15px;\n          font-weight: 700; }\n        .main .editor_container .editor_text > div:nth-of-type(1) h1 {\n          font-size: 26px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) h2 {\n          font-size: 24px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) h3 {\n          font-size: 22px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) h4 {\n          font-size: 20px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) h5 {\n          font-size: 18px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) table {\n          border-top: 1px solid #ccc;\n          border-left: 1px solid #ccc; }\n        .main .editor_container .editor_text > div:nth-of-type(1) table td,\n        .main .editor_container .editor_text > div:nth-of-type(1) table th {\n          border-bottom: 1px solid #ccc;\n          border-right: 1px solid #ccc;\n          padding: 3px 5px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) table th {\n          border-bottom: 2px solid #ccc;\n          text-align: center; }\n        .main .editor_container .editor_text > div:nth-of-type(1) blockquote {\n          display: block;\n          border-left: 8px solid #acd6f3;\n          padding: 5px 10px;\n          margin: 10px 0;\n          line-height: 1.4;\n          font-size: 100%;\n          background-color: #e1ebf2; }\n        .main .editor_container .editor_text > div:nth-of-type(1) code {\n          display: inline-block;\n          *display: inline;\n          *zoom: 1;\n          background-color: #eaead6;\n          border-radius: 3px;\n          padding: 3px 5px;\n          margin: 0 3px; }\n        .main .editor_container .editor_text > div:nth-of-type(1) pre code {\n          display: block; }\n        .main .editor_container .editor_text > div:nth-of-type(1) ul, .main .editor_container .editor_text > div:nth-of-type(1) ol {\n          margin: 1em; }\n        .main .editor_container .editor_text > div:nth-of-type(1) ul {\n          list-style: circle; }\n        .main .editor_container .editor_text > div:nth-of-type(1) ol {\n          list-style: decimal; }\n',""])}}]);