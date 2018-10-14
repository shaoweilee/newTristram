import React from "react";
import { Spin } from "antd";
import "./index.scss";

const FullPageLoading = () => {
  return (
    <div className='loading_container'>
      <Spin size='large' />
    </div>
  );
}

export { FullPageLoading };