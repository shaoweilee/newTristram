import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { actionCreators } from "./store";
import Header from "../../common/header";
import { mobilecheck } from "../../mobiletest";
import "./index.scss";

class Detail extends React.Component {
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
  render() {
    const { title, content, authorNickname, createTime, updateTime } = this.props;
    return (
      <React.Fragment>
        {!mobilecheck() && <Header />}
        <section className='article_container'>
          <article className='article_content' style={{ width: mobilecheck() && '90vw' }}>
            <h1 className='article_title'>{title}</h1>
            <aside className='article_info'>
              <div className='info_author'>
                <img className='author_avator' alt='' src='' />
              </div>
              <div className='info_detail'>
                <div className='author_detail'>
                  <span className='detail_item author_name'>{authorNickname}</span>
                  <img className='detail_item author_badge' alt='' src='' />
                  <a className='detail_item author_follow'>+关注</a>
                </div>
                <div className='article_detail'>
                  <span className='detail_item article_time'>创作于{createTime}，</span>
                  <span className='detail_item article_updateTime'>更新于{updateTime}。</span>
                  {/* <span className='detail_item article_wordcount'>字数</span>
                <span className='detail_item article_readcount'>阅读</span>
                <span className='detail_item article_comment'>评论</span>
              <span className='detail_item article_like'>喜欢</span> */}
                </div>
              </div>
            </aside>
            <section className='article_text' dangerouslySetInnerHTML={{ __html: content }}></section>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
    authorNickname: state.getIn(['detail', 'authorNickname']),
    createTime: state.getIn(['detail', 'createTime']),
    updateTime: state.getIn(['detail', 'updateTime']),
  };
};
const mapDispatch = (dispatch) => {
  return {
    getDetailData(id) {
      dispatch(actionCreators.getDetailDataFunctionAC(id));
    },
  };
};
export default connect(mapState, mapDispatch)(withRouter(Detail));