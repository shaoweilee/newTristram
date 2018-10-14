import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

// import Header from "./common/header";
import Home from "./pages/home";
// import Detail from "./pages/detail";//使用loadable之后，需要加载的是异步组件
import Detail from "./pages/detail/loadable.index";//使用loadable之后，需要加载的是异步组件
import Login from "./pages/login/loadable.index";
import SignUp from "./pages/signup/loadable.index";
import Write from "./pages/write/loadable.index";
import Search from "./pages/search/loadable.index";
import { store } from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            {/* <Header /> */}
            <Route path='/' exact component={Home}></Route>{/*path为/ 不能加exact属性。 */}
            <Route path='/login' exact component={Login}></Route>
            <Route path='/sign_up' exact component={SignUp}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/write' exact component={Write}></Route>
            <Route path='/search' exact component={Search}></Route>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export { App };