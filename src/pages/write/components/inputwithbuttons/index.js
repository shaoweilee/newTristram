import React from "react";
import { Input, Button } from "antd";
import ButtonGroup from "antd/lib/button/button-group";
import { CSSTransition } from "react-transition-group";

import "./index.scss";

// class InputWithButtons extends React.Component {//类式组件，使用css-transition，动画触发的时机需要注意，应该是组件更新时触发。
//   state = {
//     beginAnimate: false,
//   }
//   componentDidMount() {
//     this.input.focus();
//     this.setState({
//       beginAnimate: true,
//     });
//   }
//   render() {
//     console.log(this.props);
//     const { handleInputBlur, getInputValue, createInputValue } = this.props;
//     return (
//       <CSSTransition in={this.state.beginAnimate} timeout={300} classNames='show' >
//         <div className='input_container'>
//           <Input placeholder='请输入标题' ref={input => { this.input = input }}
//             value={createInputValue}
//             onChange={getInputValue} />
//           <ButtonGroup className='input_btns'>
//             <Button type='default'>确认</Button>
//             <Button type='danger'>取消</Button>
//           </ButtonGroup>
//         </div >
//       </CSSTransition>

//     );
//   }
// }

function InputWithButtons(props) {//函数式组件，不使用css-transition，ref的获取需要注意。函数式组件上不可以使用ref，因为没有实例。
  const { getInputValue, createInputValue, handleConfirm, handleCancel, createType, currentSelectedNotebookId } = props;
  return (
    <div className='input_container' ref={div => {//函数式获取ref。DOM元素上使用ref获取的是DOM节点。
      if (div && !div.classList.contains('show')) {
        setTimeout(() => {
          div.classList.add('show');
        }, 0);
      }
    }}>
      <Input placeholder='请输入标题' ref={input => {//类式组件上使用ref获取的是类的实例
        if (input && document.activeElement !== input.input) {
          input.focus();
        }
      }}
        value={createInputValue}
        onChange={getInputValue} />
      <ButtonGroup className='input_btns'>
        <Button type='default' onClick={() => { handleConfirm(createInputValue, createType, currentSelectedNotebookId); }}>确认</Button>
        <Button type='danger' onClick={handleCancel}>取消</Button>
      </ButtonGroup>
    </div >
  );
}

export { InputWithButtons };