import React from "react";
import { connect } from "react-redux";
import { Link, Redirect, withRouter } from "react-router-dom";

import { actionCreators } from "./store";
import "./index.scss";

class SignUp extends React.PureComponent {
  componentDidUpdate() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      setTimeout(() => {
        this.props.history.push('/');
      }, 1000);
    }
  }
  render() {
    const { nickname, username, password, handleSignUp, handleInput, loginStatus, msg, buttonStatus } = this.props;
    return (
      <section className='login_container'>
        <div className='login_pop'>
          <nav className='sign_nav'>
            <ul className='nav_list'>
              <li className='nav_item'><Link to='/login' className='nav_link'>登录</Link></li>
              <li className='nav_item separator'>·</li>
              <li className='nav_item'><Link to='/sign_up' className='nav_link active'>注册</Link></li>
            </ul>
          </nav>
          <div className='sign_up_container'>
            {/* 但是在这里使用事件委托就没事。。。 */}
            <form action='' method='post' onChange={handleInput}>
              <div className='input_wrapper'>
                <i className='iconfont icon-renminbi'></i>
                <input type='text' name='nickname' placeholder='昵称' className='less_border' value={nickname} />
              </div>
              <div className='input_wrapper'>
                <i className='iconfont icon-renminbi'></i>
                <input type='text' name='username' placeholder='账号' className='less_border' value={username} />
              </div>
              <div className='input_wrapper'>
                <i className='iconfont icon-renminbi'></i>
                <input type='password' name='password' placeholder='密码' value={password} />
              </div>
              <button className='sign_btn' onClick={(e) => { handleSignUp(e, nickname, username, password); }}>{buttonStatus}</button>
            </form>
          </div>
          {/* {loginStatus ? */}
          <div className='welcome'>
            {msg}
          </div>
          {/* : null} */}
        </div>
      </section>
    );
  }
}
const mapState = (state) => {
  return {
    nickname: state.getIn(['signUp', 'nickname']),
    username: state.getIn(['signUp', 'username']),
    password: state.getIn(['signUp', 'password']),
    loginStatus: state.getIn(['login', 'loginStatus']),
    msg: state.getIn(['signUp', 'msg']),
    buttonStatus: state.getIn(['signUp', 'buttonStatus']),
  };
};
const mapDispatch = (dispatch) => {
  return {
    handleInput(e) {
      const input = e.target;
      dispatch(actionCreators.changeUserInput(input.name, input.value.replace(/\s/g, '')));
    },
    handleSignUp(e, nickname, username, password) {
      e.preventDefault();
      if (nickname && username && password) {
        dispatch(actionCreators.changeUserInput('buttonStatus', '注册中···'));
        dispatch(actionCreators.signUpFunctionalAC(nickname, username, password));
      } else {
        dispatch(actionCreators.changeUserInput('buttonStatus', '都是必填项哦！'));
        setTimeout(() => {
          dispatch(actionCreators.changeUserInput('buttonStatus', '注册'));
        }, 2000);
      }
    }
  };
};
export default connect(mapState, mapDispatch)(withRouter(SignUp));