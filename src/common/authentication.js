import axios from "axios";
import { requestURL } from "./config";
const authentication = () => {
  return axios.get(`${requestURL}user/authentication`)
};
export { authentication };