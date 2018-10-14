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