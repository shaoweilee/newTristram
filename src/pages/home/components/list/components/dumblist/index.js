import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

/**
 * 
 * @param {object} props props对象，需要包含articlelist，loadmore，requestPage。
 */
const DumbList = (props) => (
  <section className='articlelist_container'>
    <ul className='articlelist_list'>
      {
        props.articlelist.map((item, index) => {
          return (
            // <li className='articlelist_Item' key={item.get('id')}>
            <li className='articlelist_Item' key={index}>
              <div className='articlelist_summary'>
                {/* <a className='summary_title' target='_blank'>{item.get('title')}</a> */}
                <Link to={`/detail/${item.get('articleId')}`} className='summary_title' target='_blank'>{item.get('articleName')}</Link>
                <p className='summary_content'>{item.get('description')}</p>
                <div className='summary_extraInfo'>
                  <a className='extraInfo_author' target='_blank'>{item.get('nickname')}</a>
                  <span className='extraInfo_comments' target='_blank'><span className='iconfont icon-duihuakuang1'>创作于{item.get('createTime')}</span></span>
                  {
                    item.get('updateTime') ? <span className='extraInfo_likes'><span className='iconfont icon-xin'>更新于{item.get('updateTime')}</span></span> : null
                  }
                  {/* {item.get('donatesCount') ? <span className='extraInfo_donates'><span className='iconfont icon-renminbi'>{item.get('donatesCount')}</span></span> : null} */}
                </div>
              </div>
              {/* {
                item.get('imgUrl') ?
                  (<a className='articlelist_link' target='_blank'>
                    <img alt='' className='articlelist_img' src='https://upload-images.jianshu.io/upload_images/1096130-83e32b3e990f4c91.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240' />
                  </a>) :
                  null
              } */}
            </li>
          );
        })
      }
    </ul>
    {
      props.hasMore ?
        <a className='articlelist_loadmore' onClick={() => { props.loadmore(props.requestPage); }}>阅读更多</a>
        :
        <a className='articlelist_loadmore'>没有更多啦！</a>
    }
  </section>
);

export { DumbList };