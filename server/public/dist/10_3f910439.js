(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{115:function(n,e,t){var a=t(116);"string"==typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(14)(a,o);a.locals&&(n.exports=a.locals)},116:function(n,e,t){(n.exports=t(13)(!1)).push([n.i,".login_container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column nowrap;\n      flex-flow: column nowrap;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: #f1f1f1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0; }\n  .login_container .login_pop {\n    width: 300px;\n    padding: 50px;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n    box-sizing: content-box; }\n    .login_container .login_pop .sign_nav {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n          justify-content: center;\n      margin-bottom: 50px;\n      font-size: 18px; }\n      .login_container .login_pop .sign_nav .nav_list {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center; }\n        .login_container .login_pop .sign_nav .nav_list .nav_link {\n          padding: 10px;\n          display: inline-block;\n          color: #969696; }\n        .login_container .login_pop .sign_nav .nav_list .active {\n          font-weight: 700;\n          color: #ea6f5a;\n          border-bottom: 2px solid #ea6f5a; }\n        .login_container .login_pop .sign_nav .nav_list .separator {\n          margin: 0 10px; }\n    .login_container .login_pop .sign_up_container .input_wrapper {\n      position: relative; }\n      .login_container .login_pop .sign_up_container .input_wrapper .iconfont {\n        position: absolute;\n        left: 15px;\n        top: 16px; }\n      .login_container .login_pop .sign_up_container .input_wrapper input {\n        box-sizing: border-box;\n        height: 50px;\n        width: 100%;\n        padding-left: 40px;\n        border: 1px solid #c8c8c8;\n        border-radius: 0 0 4px 4px;\n        background-color: rgba(181, 181, 181, 0.1); }\n        .login_container .login_pop .sign_up_container .input_wrapper input.less_border {\n          border-bottom: none;\n          border-radius: 4px 4px 0 0; }\n    .login_container .login_pop .sign_up_container .remember_wrapper {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: center;\n          align-items: center;\n      margin-top: 20px; }\n    .login_container .login_pop .sign_up_container .sign_btn {\n      margin-top: 20px;\n      width: 100%;\n      padding: 9px 18px;\n      font-size: 18px;\n      border: none;\n      border-radius: 25px;\n      color: #fff;\n      background: #3194d0;\n      cursor: pointer;\n      display: block; }\n    .login_container .login_pop .welcome {\n      text-align: center; }\n",""])},185:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(t(15)),o=d(t(6)),i=d(t(8)),l=d(t(5)),r=d(t(7)),s=d(t(1)),p=t(19),c=t(28),u=t(144);function d(n){return n&&n.__esModule?n:{default:n}}t(115);var g=function(n){function e(){return(0,o.default)(this,e),(0,l.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,r.default)(e,n),(0,i.default)(e,[{key:"componentDidUpdate",value:function(){var n=this;this.props.loginStatus&&setTimeout(function(){n.props.history.push("/")},1e3)}},{key:"render",value:function(){var n=this.props,e=n.nickname,t=n.username,a=n.password,o=n.handleSignUp,i=n.handleInput,l=(n.loginStatus,n.msg),r=n.buttonStatus;return s.default.createElement("section",{className:"login_container"},s.default.createElement("div",{className:"login_pop"},s.default.createElement("nav",{className:"sign_nav"},s.default.createElement("ul",{className:"nav_list"},s.default.createElement("li",{className:"nav_item"},s.default.createElement(c.Link,{to:"/login",className:"nav_link"},"登录")),s.default.createElement("li",{className:"nav_item separator"},"·"),s.default.createElement("li",{className:"nav_item"},s.default.createElement(c.Link,{to:"/sign_up",className:"nav_link active"},"注册")))),s.default.createElement("div",{className:"sign_up_container"},s.default.createElement("form",{action:"",method:"post",onChange:i},s.default.createElement("div",{className:"input_wrapper"},s.default.createElement("i",{className:"iconfont icon-renminbi"}),s.default.createElement("input",{type:"text",name:"nickname",placeholder:"昵称",className:"less_border",value:e})),s.default.createElement("div",{className:"input_wrapper"},s.default.createElement("i",{className:"iconfont icon-renminbi"}),s.default.createElement("input",{type:"text",name:"username",placeholder:"账号",className:"less_border",value:t})),s.default.createElement("div",{className:"input_wrapper"},s.default.createElement("i",{className:"iconfont icon-renminbi"}),s.default.createElement("input",{type:"password",name:"password",placeholder:"密码",value:a})),s.default.createElement("button",{className:"sign_btn",onClick:function(n){o(n,e,t,a)}},r))),s.default.createElement("div",{className:"welcome"},l)))}}]),e}(s.default.PureComponent);e.default=(0,p.connect)(function(n){return{nickname:n.getIn(["signUp","nickname"]),username:n.getIn(["signUp","username"]),password:n.getIn(["signUp","password"]),loginStatus:n.getIn(["login","loginStatus"]),msg:n.getIn(["signUp","msg"]),buttonStatus:n.getIn(["signUp","buttonStatus"])}},function(n){return{handleInput:function(e){var t=e.target;n(u.actionCreators.changeUserInput(t.name,t.value.replace(/\s/g,"")))},handleSignUp:function(e,t,a,o){e.preventDefault(),t&&a&&o?(n(u.actionCreators.changeUserInput("buttonStatus","注册中···")),n(u.actionCreators.signUpFunctionalAC(t,a,o))):(n(u.actionCreators.changeUserInput("buttonStatus","都是必填项哦！")),setTimeout(function(){n(u.actionCreators.changeUserInput("buttonStatus","注册"))},2e3))}}})((0,c.withRouter)(g))}}]);