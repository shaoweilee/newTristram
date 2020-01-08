import React from "react";
import './index.scss';
class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div>
          <div>Designed &amp; Powerd by <a href="/">秦端雨</a></div>
          <div>Copyright© 2018-2020 秦端雨-新崔斯特姆-庇护之地</div>
          <a href="http://beian.miit.gov.cn" target="_blank" rel="nofollow">京ICP备17038016号</a>
        </div>
      </div>
    );
  }
}

export default Footer;