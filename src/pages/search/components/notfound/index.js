import React from "react";
import "./index.scss";

const NotFound = (props) => (
  <div className='not_container'>
    {
      props.searchType === 'keyword' ?
        <h1 className='not_description'>抱歉，未找到与<span className='not_keyword'>{props.keyword}</span>相关的内容~</h1>
        :
        <h1 className='not_description'>抱歉，<span className='not_keyword'>{props.keyword}</span>分类下暂无内容~</h1>
    }
  </div>
);

export { NotFound };