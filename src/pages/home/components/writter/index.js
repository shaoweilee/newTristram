import React from "react";
import { connect } from "react-redux";

import { actionCreators } from "../../store";
import "./index.scss";

class Writter extends React.Component {
  render() {
    const { writterList, handleSwitchClick } = this.props;
    return (
      <section className='writter_container' >
        <div className='writter_title'>
          <span className='title_title'>推荐作者</span>
          <a className='title_switch' onClick={() => { handleSwitchClick(this.spinIcon); }}><i className='iconfont icon-spinner9' ref={(icon) => { this.spinIcon = icon; }}></i>换一批</a>
        </div>
        <ul className='writter_list'>
          {
            writterList.map((item) => {
              return (
                <li className='writter_item' key={item.get('id')}>
                  <a className='writter_link'>
                    <img className='writter_avator' src={item.get('avatar_source')} />
                  </a>
                  <div className='writter_info'>
                    <div className='info_discribe'>
                      <a className='info_nickname'>{item.get('nickname')}</a>
                      <p className='info_detail'>写了{item.get('total_wordage')}字&nbsp;·&nbsp;{item.get('total_likes_count')}喜欢</p>
                    </div>
                    <a className='writter_follow'>+关注</a>
                  </div>
                </li>
              );
            })
          }
        </ul>
        <a className='writter_more'>查看全部&nbsp;></a>
      </section>
    );
  }
}


const mapState = (state) => {
  return {
    writterList: state.getIn(['home', 'writterList']),
  };
};
const mapDispatch = (dispatch) => {
  return {
    handleSwitchClick(spin) {
      let originAngle = spin.style.transform.replace(/\D/ig, '');
      if (originAngle) {
        originAngle = Number.parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = `rotate(${360 + originAngle}deg)`;
      dispatch(actionCreators.getWritterList());
    }
  };
};
export default connect(mapState, mapDispatch)(Writter);