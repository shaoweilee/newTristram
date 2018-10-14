import React from "react";
import Header from "../../common/header";
import { NotFound } from "./components/notfound";
import { connect } from "react-redux";
import { DumbList } from "../home/components/list/components/dumblist";
import { actionCreators } from "./store";
import "./index.scss";

class Search extends React.Component {
  componentDidMount() {
    this.props.loadmore(this.props.requestPage);
    this.props.changeKeyword();
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className='search_container'>
          {
            this.props.showSearchResult ?
              <React.Fragment>
                {
                  this.props.searchType === 'keyword' ?
                    <h1 className='search_h1'>为您列出关键字是<span>{this.props.keyword}</span>的搜索结果：</h1>
                    :
                    <h1 className='search_h1'>为您列出<span>{this.props.keyword}</span>分类下的文章：</h1>
                }
                <DumbList {...this.props} />
              </React.Fragment>
              :
              <NotFound keyword={this.props.keyword} searchType={this.props.searchType} />
          }
        </section>
      </React.Fragment>
    );
  }
}
const mapState = (state) => ({
  articlelist: state.getIn(['search', 'articlelist']),
  requestPage: state.getIn(['search', 'nextPage']),
  showSearchResult: state.getIn(['search', 'showSearchResult']),
  keyword: state.getIn(['search', 'keyword']),
  searchType: state.getIn(['search', 'searchType']),
  hasMore: state.getIn(['search', 'hasMore']),
});
const mapDispatch = (dispatch) => ({
  loadmore(requestPage) {
    dispatch(actionCreators.searchAsyncAC(requestPage));
  },
  changeKeyword() {
    let search = decodeURI(location.search);
    let type = search.match(/^\?(keyword|category)/i)[1];
    dispatch(actionCreators.changeKeywordAndTypeAC(type, search.slice(search.indexOf('=') + 1)));
  },
});
export default connect(mapState, mapDispatch)(Search);