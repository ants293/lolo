import axios from "axios";

export default class ApiService {
 static hostUrl = process.env.REACT_APP_NODE_SERVICE_URL || window.location.origin;

 static request(config) {
  return axios(config);
 }
}