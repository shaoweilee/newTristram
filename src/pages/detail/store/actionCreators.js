
import axios from "axios";
import * as constants from "./constants";
import { requestURL } from "../../../common/config";
const getDetailDataAC = (data) => {
  return {
    type: constants.GET_DETAIL_DATA,
    data,
  };
};
const getDetailDataFunctionAC = (id) => {
  return function (dispatch) {
    axios.get(`${requestURL}getDetail?articleId=${id}`)
      .then(res => {
        const { code, article, author } = res.data;
        switch (code) {
          case 0:
            break;
          case 1:
            {
              const { articleName: title, articleContent: content, createTime, updateTime } = article;
              const { nickname: authorNickname } = author;
              dispatch(getDetailDataAC(
                {
                  authorNickname,
                  title,
                  content,
                  createTime,
                  updateTime,
                }
              ));
            }
            break;

          default:
            break;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};


export { getDetailDataFunctionAC };