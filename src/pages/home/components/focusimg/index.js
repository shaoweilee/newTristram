import React from "react";
import { Move } from "../../../../common/move";
import { ISIE9 } from "../../../../common/ieTest";
import "./FocusImg.scss";

//IE9不支持classlist，手动添加
if (!("classList" in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function () {
      var self = this;
      function update(fn) {
        return function (value) {
          var classes = self.className.split(/\s+/g),
            index = classes.indexOf(value);

          fn(classes, index, value);
          self.className = classes.join(" ");
        }
      }

      return {
        add: update(function (classes, index, value) {
          if (!~index) classes.push(value);
        }),

        remove: update(function (classes, index) {
          if (~index) classes.splice(index, 1);
        }),

        toggle: update(function (classes, index, value) {
          if (~index)
            classes.splice(index, 1);
          else
            classes.push(value);
        }),

        contains: function (value) {
          return !!~self.className.split(/\s+/g).indexOf(value);
        },

        item: function (i) {
          return self.className.split(/\s+/g)[i] || null;
        }
      };
    }
  });
}


class FocusImg extends React.Component {
  state = {
    timer: null,
    imgContainer: null,
    imgItems: null,
    currentIndex: 0,
    indicatorContainer: null,
    indicatorItems: null,
    ie9Move: null,
  }
  componentDidMount() {
    this.setState(
      {
        imgItems: [...this.state.imgContainer.querySelectorAll('li')],
        indicatorItems: [...this.state.indicatorContainer.querySelectorAll('li')],
        // ie9Move: ISIE9 ? new Move(document.querySelector('.foucsImg_container')) : null,
      },
      () => {
        this.setIndicatorAcitve(this.state.currentIndex);
      }
    );
    this.runTimer();

  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  runTimer = (currentIndex = 0) => {
    const timer = setInterval(() => {
      currentIndex = currentIndex === this.props.totalImgCount - 1 ? 0 : currentIndex + 1;
      this.imgContainerMove(currentIndex);
      this.setIndicatorAcitve(currentIndex);
      this.setState({ currentIndex });
    }, this.props.speed);

    this.setState({
      timer: timer,
    });
  }
  imgContainerMove = (targetIndex) => {
    if (ISIE9) {
      // this.state.imgContainer.style.left = `${-this.props.imgWidth * targetIndex}px`;
      this.state.ie9Move.move('linear', { left: -this.props.imgWidth * targetIndex }, 300);
    } else {
      this.state.imgContainer.style.transform = `translateX(${-this.props.imgWidth * targetIndex}px)`;
    }
  }
  HandleIndicatorClick = (e) => {
    if (e.target.tagName !== 'LI') {
      return false;
    }
    clearInterval(this.state.timer);
    let index = this.getItemIndexInParent(this.state.indicatorContainer, 'li', e);
    this.imgContainerMove(index);
    this.setIndicatorAcitve(index);
    this.setState({
      currentIndex: index,
    });
    this.runTimer(index);
  }
  handleMouseEnter = (e) => {
    setTimeout(() => {
      clearInterval(this.state.timer);
    }, 0);
  }
  handleMouseLeave = () => {
    clearInterval(this.state.timer);
    this.runTimer(this.state.currentIndex);
  }

  handleArrowClick = (e) => {
    let targetIndex = 0;
    if (/left/.test(e.target.className)) {
      if (this.props.loop) {
        targetIndex = this.state.currentIndex - 1 < 0 ? this.props.totalImgCount - 1 : this.state.currentIndex - 1;//loop
      } else {
        targetIndex = this.state.currentIndex - 1 < 0 ? 0 : this.state.currentIndex - 1;//no-loop
      }
    } else {
      if (this.props.loop) {
        targetIndex = this.state.currentIndex + 1 >= this.props.totalImgCount ? 0 : this.state.currentIndex + 1;//loop
      } else {
        targetIndex = this.state.currentIndex + 1 >= this.props.totalImgCount ? this.props.totalImgCount - 1 : this.state.currentIndex + 1;//no-loop
      }
    }
    this.imgContainerMove(targetIndex);
    this.setIndicatorAcitve(targetIndex);
    this.setState({
      currentIndex: targetIndex,
    });
  }
  setIndicatorAcitve = (currentIndex = 0, indicatorItems = this.state.indicatorItems) => {
    const thisOneWillDeactive = indicatorItems.find((el) => {
      return el.classList.contains('active');
    });
    if (thisOneWillDeactive) {
      thisOneWillDeactive.classList.remove('active');
    }
    indicatorItems[currentIndex].classList.add('active');
  }

  componentDidUpdate() {
    this.setState({
      indicatorContainer: document.querySelector('.foucsImg_indicator'),
      indicatorItems: [...document.querySelectorAll('.indicator_item')],
      ie9Move: ISIE9 ? new Move(this.state.imgContainer) : null,
    },
      () => {
        this.setIndicatorAcitve(this.state.currentIndex)
      }
    );
  }

  /**
   * 工具函数----使用场景：在一个事件委托中，找出目标元素在父元素中的下标。
   * @static 轮播图组件FocusImg的静态函数 / 类的函数
   * @param {Element} parentElement 父元素
   * @param {String} tagName 目标元素标签名，小写~
   * @param {Event} e 事件对象
   * @returns {Number} 数字，目标元素在父元素中的下标
   */
  getItemIndexInParent = (parentElement, tagName, e) => {
    const _children = [...parentElement.querySelectorAll(tagName)];
    for (let el = e.target; el !== e.currentTarget; el = el.parentElement) {
      if (el.tagName.toLowerCase() === tagName) {
        return _children.findIndex((item) => item === el);
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.imgSource === this.props.imgSource && nextState.indicatorContainer === this.state.indicatorContainer) {
      return false;
    }
    return true;
  }
  render() {
    const { imgWidth, totalImgCount } = this.props;
    return (
      <section className='banner_foucsImg'>
        <ul className='foucsImg_container' style={{ width: ISIE9 ? imgWidth * totalImgCount : imgWidth }} ref={(ul) => { this.state.imgContainer = ul }}
          onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
        >
          {
            this.props.imgSource.map((item) => {
              return (
                <li className='foucsImg_item' key={item.id}>
                  <a href={`${item.link}`} target='_blank' className='foucsImg_link'><img src={item.img} className='banner_img' /></a>
                </li>
              );
            })
          }
        </ul>
        {/* <div className='indicator_container'> */}
        <ul className='foucsImg_indicator' onClick={this.HandleIndicatorClick} ref={(ul) => { this.state.indicatorContainer = ul }}>
          {
            (() => {
              const result = [];
              for (let i = 0; i < totalImgCount; i++) {
                result.push(<li className='indicator_item' key={Math.random()} style={{ width: ISIE9 ? (200 - (2 * 3 * totalImgCount)) / totalImgCount : 'auto' }}></li >);
              }
              return result;
            })()
          }
        </ul>
        {/* </div> */}
        <div className='arrow_left switchControl' onClick={this.handleArrowClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>&lt;</div>
        <div className='arrow_right switchControl' onClick={this.handleArrowClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>&gt;</div>
      </section>
    );
  }
}

export { FocusImg };