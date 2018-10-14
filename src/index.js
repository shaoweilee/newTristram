import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import "./common.scss";
import "./statics/iconfont/iconfont.scss";

ReactDOM.render(
  <App />,
  document.body
    .appendChild(document.createElement('main'))
);