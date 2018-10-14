import React from "react";
import { Button, Spin } from "antd";

import "./index.scss";


class MutiStatesButton extends React.Component {
  render() {
    const { btnType, btnText, btnSpinning, handleBtnClick, href, disabled, pubDisabled } = this.props.dumbProps;
    return (
      <div className='publish_btn_container'>
        <Spin size='small' className='publish_btn-loading' spinning={btnSpinning}></Spin>
        <Button href={href} type='primary' target='_blank' disabled={disabled} className='publish_btn_check'>查看发布</Button>
        <Button type={btnType} block onClick={handleBtnClick} disabled={pubDisabled} className='publish_btn'>{btnText}</Button>
      </div>
    );
  }
}
export { MutiStatesButton };