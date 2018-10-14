//this file combine reducers to a BIG reducer, then export it.
// import { combineReducers } from "redux";

//use redux-immutable to uniform state types.
import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";
import { reducer as signUpReducer } from "../pages/signup/store";
import { reducer as writeReducer } from "../pages/write/store";
import { reducer as searchReducer } from "../pages/search/store";

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
  signUp: signUpReducer,
  write: writeReducer,
  search: searchReducer,
});