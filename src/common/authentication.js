import axios from "axios";
import { requestURL } from "./config";
import { ISIE } from "./ieTest";

const authentication = () => {
  return axios.get(`${requestURL}user/authentication${ISIE ? `?token=${Date.now()}` : ''}`);
};
export { authentication };