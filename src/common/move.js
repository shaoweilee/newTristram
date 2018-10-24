if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 17);
      };
  })();
}
if (!window.cancelAnimationFrame) {
  window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}
/**
 * 运动类
 * @param {HTMLElement} el 要运动的DOM元素
 */
class Move {
  constructor(el) {
    this.el = el;
    this.timer = undefined;
  }
  getStyle(obj, style) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj)[style];
    }
    return obj.currentStyle[style];
  }
  changeStyle(obj, key, p) {
    if (key == 'opacity') {
      obj.style.opacity = p / 100;
      obj.style.filter = 'alpha(opacity=' + p + ')';
    } else {
      obj.style[key] = p + 'px';
    }
  }
  _linearMove() {
    let d = this.times;                    //总持续时长
    let t = +new Date() - this.startTime;  //已经过时间
    for (const key in this.json) {
      if (this.json.hasOwnProperty(key)) {
        let b = this.iCur[key];            //开始位置
        let c = this.json[key] - this.iCur[key];//要运动的总距离
        let p = t * (c / d) + b;
        this.changeStyle(this.el, key, p);
      }
    }
    if (t <= d) {
      this.timer = requestAnimationFrame(this._linearMove.bind(this));
    } else {
      cancelAnimationFrame(this.timer);
      for (const key in this.json) {
        if (this.json.hasOwnProperty(key)) {
          this.changeStyle(this.el, key, this.json[key]);
        }
      }
    }
  }
  /**
   * 结束运动
   */
  cancelMove() {
    cancelAnimationFrame(this.timer);
  }
  /**
   * 动起来！
   * @param {string} style 运动类型，暂时只有linear线性可选
   * @param {object} json 运动目标对象{width: 200}
   * @param {number} times 运动持续时间
   */
  move(style, json, times) {
    this.json = json;
    this.startTime = +new Date();
    this.iCur = {};
    this.times = times;
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        if (key === 'opacity') {
          this.iCur[key] = Math.round(this.getStyle(this.el, key) * 100);
        } else {
          this.iCur[key] = parseInt(this.getStyle(this.el, key));
        }
      }
    }
    // cancelAnimationFrame(this.timer);
    switch (style) {
      case 'linear':
        this.timer = requestAnimationFrame(this._linearMove.bind(this));
        break;
      default:
        break;
    }
  }
}

export { Move };