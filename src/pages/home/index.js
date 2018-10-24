import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import Header from "../../common/header";
import { FocusImg } from "./components/focusimg";
import Topic from "./components/topic";
import List from "./components/list";
// import Recommend from "./components/recommend";
// import Writter from "./components/writter";

import "./home.scss";

class Home extends React.Component {

  componentWillMount() {
    this.props.getInitialData(this.props.requestPage);
  }
  componentDidMount() {
    this.bindEvents();
  }
  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollShowState);
  }
  componentWillUnmount() {
    this.props.resetData();
    window.removeEventListener('scroll', this.props.changeScrollShowState);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='content_container'>
          <section className='content_left'>
            <FocusImg
              speed={2000}
              imgWidth={625}
              loop={true}
              totalImgCount={3}
              imgSource={this.props.focusImgData.toJS()}
              // imgSource={
              //   [
              //     {
              //       "id": 1538215638112,
              //       "img": "https://upload.jianshu.io/admin_banners/web_images/4369/0cc77fa3ef12b099ba0237da2616c87cba0f58ae.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              //     },
              //     {
              //       "id": 15382115638112,
              //       "img": "https://upload.jianshu.io/admin_banners/web_images/4390/5f848ed808ef75163e469c1639a248790f7f18af.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              //     },
              //     {
              //       "id": 15382156238112,
              //       "img": "https://upload.jianshu.io/admin_banners/web_images/4392/3b02934492d0f9bb8f3e58c969618a38dce7ca37.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              //     }
              //   ]
              // }
            />
            <Topic />
            <List />
          </section>
          {/* <aside className='content_right'>
            <Recommend />
            <Writter />
          </aside> */}
          {
            this.props.backTopShow ?
              (<div className='backTop'>
                <a className='backTop_btn' onClick={this.props.scrollToTop}>
                  <div className='backTop_btn_content'></div>
                </a>
              </div>) : null
          }
        </div>
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    backTopShow: state.getIn(['home', 'backTopShow']),
    requestPage: state.getIn(['home', 'nextPage']),
    focusImgData: state.getIn(['home', 'focusImg']),
  };
};

const mapDispatch = (dispatch) => {
  return {
    getInitialData(requestPage) {
      dispatch(actionCreators.getHomeData(requestPage));
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    changeScrollShowState() {
      if (document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.changeScrollShowStateAC(true));
      } else {
        dispatch(actionCreators.changeScrollShowStateAC(false));
      }
    },
    resetData() {
      dispatch(actionCreators.resetDataAC());
    }
  };
};

export default connect(mapState, mapDispatch)(Home);