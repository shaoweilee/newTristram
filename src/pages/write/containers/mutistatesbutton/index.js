import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../store";
import { MutiStatesButton } from "../../../../common/mutistatesbutton";
import { changeStatus } from "../../store/actionCreators";



class SmartMutiStatesButton extends React.Component {
  render() {
    const { articlesData, currentArticleId, autoSaving, btnClick } = this.props;
    const article = articlesData.find((article) => article.articleId === currentArticleId);
    const handleBtnClick = () => {
      btnClick(currentArticleId, article.finished);
    };
    let dumbProps = null;
    if (article) {
      dumbProps = {
        btnText: article.finished ? '取消发布' : '发布',
        btnSpinning: false,
        btnType: 'primary',
        href: article.publishSite,
        disabled: !article.finished,
        handleBtnClick,
      };
      if (autoSaving) {
        dumbProps.btnText = '保存中…';
        dumbProps.btnSpinning = true;
        dumbProps.btnType = 'ghost';
        dumbProps.pubDisabled = true;
      }
    }
    return (
      <React.Fragment>
        {
          currentArticleId ?
            <MutiStatesButton dumbProps={dumbProps} />
            : null
        }
      </React.Fragment>
    );
  }
}

const mapState = (state) => {
  return {
    currentArticleId: state.getIn(['write', 'currentArticleId']),
    autoSaving: state.getIn(['write', 'autoSaving']),
  };
};

const mapDispatch = (dispatch) => {
  return {
    btnClick(articleId, finished) {
      if (finished) {
        dispatch(actionCreators.autoSaveFunctionAC({ articleId, finished: false, updateType: 'finished' }));
      } else {
        dispatch(changeStatus('pubPanelShow', true));
      }
    },
  };
};

export default connect(mapState, mapDispatch)(SmartMutiStatesButton); 