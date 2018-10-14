import React from "react";
import { connect } from "react-redux";

import "./index.scss";


class Recommend extends React.Component {
  render() {
    const { recommendList } = this.props;
    return (
      <section className='recommend_container'>
        <ul className='recommend_list'>
          {
            recommendList.map((item) => {
              return (
                <li className='recommend_item' key={item.get('id')}><a className='recommend_link'><img src={item.get('imgUrl')} alt='' className='recommend_img' /></a></li>
              );
            })
          }
        </ul>
        <section className='recommend_download'>
          <a className='download_link'>
            <img className='download_img' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
            <div className='download_describe'>
              <p className='describe_title'>下载简书手机App&nbsp;></p>
              <p className='describe_summary'>随时随地发现和创作内容</p>
            </div>
          </a>
          <div className='qrcode_container'>
            <img className='qrcode_img' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' />
          </div>
        </section>
      </section>
    );
  }
}

const mapState = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList']),
  };
};
export default connect(mapState)(Recommend);