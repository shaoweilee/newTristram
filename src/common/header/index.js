import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators, constants } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { authentication } from "../authentication";
import { ISIE } from "../ieTest";
import "./header.scss";
import logoPic from "../../statics/tristram.jpg";
import { requestURL } from "../config";
//UI Header
class Header extends React.Component {
  showSearch = () => {
    const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleSwitchClick } = this.props;
    //list is still a immutable Object, must be converted to a JS Array.
    const JsList = list.toJS();
    const pageList = [];
    if (JsList.length) {
      // also ok!
      // for (let i = page - 1; i < page; i++) {
      //   for (let j = 10 * i; j < (page < totalPage ? 10 * page : JsList.length); j++) {
      //     pageList.push(
      //       <li className='contentItem' key={JsList[j]}>
      //         <a className='contentItem_link'>{JsList[j]}</a>
      //       </li>
      //     );
      //   }
      // }

      for (let i = (page - 1) * 10; i < (page < totalPage ? page * 10 : JsList.length); i++) {
        pageList.push(
          <li className='contentItem' key={JsList[i]}>
            <Link className='contentItem_link' to={{
              pathname: '/search',
              search: `keyword=${ISIE ? encodeURIComponent(JsList[i]) : JsList[i]}`,
            }} target='_blank'>{JsList[i]}</Link>
          </li>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <div className='search_info'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='search_wrapper'>
            <div className='title'>
              <span className='hot'>热门搜索</span>
              <a className='switch' onClick={() => { handleSwitchClick(page, totalPage, this.spinIcon) }}>
                <i ref={(icon) => { this.spinIcon = icon; }} className='iconfont icon-spinner9 spin'></i>
                <span>换一批</span>
              </a>
            </div>
            <ul className='content'>
              {pageList}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  componentWillMount() {
    this.props.checkLogin();
  }
  render() {
    const { loginStatus, focused, list, handleInputFoucus, handleInputBlur, logout, searchValue, handleSearchChange, handleInputKeyDown, handleSearchClick } = this.props;
    return (
      <header className='header'>
        <nav className='nav_container'>
          <ul className='nav'>
            <li>
              <Link className='logo' to='/' title='返回新崔斯特姆'>
                <img src={logoPic} className='logoPic' alt='返回新崔斯特姆'></img>
              </Link>
            </li>
            <li className='nav_padding'></li>
            <li className='nav_middle'>
              {/* <a className='f17'>首页</a> */}
              {/* <a className='f17'>下载APP</a> */}
              <div className='nav_search_container'>
                <div className='inputWrapper'>
                  <CSSTransition in={focused} timeout={300} classNames='slide' >
                    <input placeholder='搜索' onFocus={() => { handleInputFoucus(list) }} onBlur={handleInputBlur} value={searchValue} onChange={handleSearchChange} onKeyDown={(e) => { handleInputKeyDown(e, searchValue) }} />
                  </CSSTransition>
                  <CSSTransition in={focused} timeout={300} classNames='fade' >
                    <a className='search_btn' href={`/search?keyword=${ISIE ? encodeURIComponent(searchValue) : searchValue}`} onClick={(e) => { handleSearchClick(e, searchValue) }} target='_blank'><i className='iconfont icon-fangdajing'></i></a>
                  </CSSTransition>
                </div>
                {this.showSearch(focused)}
              </div>
            </li>
            <li className='nav_right'>
              {/* <a><i className="iconfont icon-Aa"></i></a> */}
              {loginStatus ? <a onClick={logout} className='login'>退出</a> : <Link to='/login' className='login'>登录</Link>}
              {loginStatus ? null : <Link className='signUp' to='/sign_up'>注册</Link>}
              <Link className='write' to='/write'><i className="iconfont icon-icon-checkin"></i>写文章</Link>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    searchValue: state.getIn(['header', 'searchValue']),
    loginStatus: state.getIn(['login', 'loginStatus']),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFoucus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.search_focus_blur_action(constants.SEARCH_FOCUS));
    },
    handleInputBlur() {
      dispatch(actionCreators.search_focus_blur_action(constants.SEARCH_BLUR));
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleSwitchClick(currentPage, totalPage, spin) {
      let originAngle = spin.style.transform ? spin.style.transform.replace(/\D/ig, '') : 0;
      if (originAngle) {
        originAngle = Number.parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${360 + originAngle}deg)`;
      if (currentPage < totalPage) {
        dispatch(actionCreators.switchPage(currentPage + 1));
      } else {
        dispatch(actionCreators.switchPage(1));
      }
    },
    checkLogin() {
      authentication()
        .then(({ data: code }) => {
          if (code) {
            dispatch(loginActionCreators.changeLoginStatus(true));
          } else {
            dispatch(loginActionCreators.changeLoginStatus(false));
          }
        })
        .catch(err => {
          console.log(err);
        })
    },
    logout() {
      dispatch(actionCreators.logout());
    },
    handleSearchChange({ target: { value } }) {
      dispatch(actionCreators.changeSearchValue(value));
    },
    handleInputKeyDown(e, searchValue) {
      if (e.keyCode === 13 && searchValue.trim() !== '') {
        // window.open(`http://192.168.1.110:1001/search?keyword=${searchValue}`, '_blank');
        window.open(`${requestURL}search?keyword=${ISIE ? encodeURIComponent(searchValue) : searchValue}`, '_blank');
      }
    },
    handleSearchClick(e, searchValue) {
      if (searchValue.trim() === '') {
        e.preventDefault();
        return false;
      }
      return true;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);