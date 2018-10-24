import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./common.scss";
import "./statics/iconfont/iconfont.scss";
if (window.navigator.userAgent.indexOf('MSIE 9.0') > 0) {
  import('./ie9.scss');
}
ReactDOM.render(
  <App />,
  document.body
    .appendChild(document.createElement('main'))
);