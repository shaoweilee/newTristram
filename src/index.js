import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./common.scss";
import "./statics/iconfont/iconfont.scss";
import { ISIE9 } from "./common/ieTest";
if (ISIE9) {
  import('./ie9.scss');
}
ReactDOM.render(
  <App />,
  document.body
    .appendChild(document.createElement('main'))
);