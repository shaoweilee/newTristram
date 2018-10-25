import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ISIE } from "../../../../common/ieTest";
import "./index.scss";

class Topic extends React.Component {
  render() {
    const { topicList } = this.props;
    return (
      <section className='topic_container'>
        <ul className='topic_list'>
          {
            topicList.map((item) => {
              return <li className='topic_item' key={item.get('id')}><Link className='topic_link' to={`/search?category=${ISIE ? encodeURIComponent(item.get('title')) : item.get('title')}`} target='_blank'><img src={item.get('img')} className='topic_img' /><span className='topic_text'>{item.get('title')}</span></Link></li>;
            })
          }
          {/* <li className='topic_item'><a className='topic_link'><span className='topic_text'>更多热门分类></span></a></li> */}
        </ul>
      </section>
    );
  }
}


const mapState = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList']),
  };
};

export default connect(mapState, null)(Topic);