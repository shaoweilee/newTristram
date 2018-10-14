import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { actionCreators } from './store';
import { actionCreators as loginAC } from "../../common/header/store";
import './index.scss';

class Login extends React.PureComponent {
  componentWillUnmount() {
    this.props.clearMeg();
  }
  render() {
    const { handleInput, handleLogin, username, password, remember, loginStatus, msg } = this.props;
    return (
      loginStatus ?
        (<Redirect to='/' />) :
        (<section className='login_container'>
          <div className='login_pop'>
            <nav className='sign_nav'>
              <ul className='nav_list'>
                <li className='nav_item'><Link to='/login' className='nav_link active'>登录</Link></li>
                <li className='nav_item separator'>·</li>
                <li className='nav_item'><Link to='/sign_up' className='nav_link'>注册</Link></li>
              </ul>
            </nav>
            <div className='sign_in_container'>
              {/* 尝试使用事件委托，但是报错。只能写在每个input上 */}
              {/* <form action='' method='post' onChange={handleInput}> */}
              <form action='' method='post'>
                <div className='input_wrapper'>
                  <i className='iconfont icon-renminbi'></i>
                  <input type='text' name='username' placeholder='账号' className='less_border' value={username} onChange={handleInput} />
                </div>
                <div className='input_wrapper'>
                  <i className='iconfont icon-renminbi'></i>
                  <input type='password' name='password' placeholder='密码' value={password} onChange={handleInput} />
                </div>
                <div className='remember_wrapper'>
                  <input type='checkbox' name='remember' defaultChecked onChange={handleInput} />
                  <span>记住我</span>
                </div>
                <button className='sign_btn' onClick={(e) => { handleLogin(e, username, password, remember); }}>登录</button>
              </form>
            </div>
            <div style={{ textAlign: 'center' }}>{msg}</div>
          </div>
        </section>)
    );
  }
}

const mapState = (state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus']),
    msg: state.getIn(['login', 'msg']),
    username: state.getIn(['login', 'userInfo', 'username']),
    password: state.getIn(['login', 'userInfo', 'password']),
    remember: state.getIn(['login', 'userInfo', 'remember']),
  };
};
const mapDispatch = (dispatch) => {
  return {
    handleInput(e) {
      const input = e.target;
      const userData = {
        [input.name]: input.name === 'remember' ? input.checked : input.value.replace(/\s/g, ''),
      };
      dispatch(actionCreators.changeUserInfo(userData));
    },
    handleLogin(e, username, password, remember) {
      e.preventDefault();
      if (username && password) {
        dispatch(actionCreators.loginFunctionalAC({ username, password, remember }));
      }
    },
    clearMeg() {
      dispatch(actionCreators.changeMsg(''));
    },
  };
};
export default connect(mapState, mapDispatch)(Login);