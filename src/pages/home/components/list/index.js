import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { DumbList } from "./components/dumblist";


// class List extends React.Component {
//   render() {
//     return <DumbList {...this.props} />;
//   }
// }

const List = (props) => <DumbList {...props} />;

const mapState = (state) => {
  return {
    articlelist: state.getIn(['home', 'articlelist']),
    requestPage: state.getIn(['home', 'nextPage']),
    hasMore: state.getIn(['home', 'hasMore']),
  };
};
const mapDispatch = (dispatch) => {
  return {
    loadmore(requestPage) {
      dispatch(actionCreators.getHomeData(requestPage));
    }
  };
};
export default connect(mapState, mapDispatch)(List);