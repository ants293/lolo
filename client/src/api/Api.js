import axios from "axios";
const CancelToken = axios.CancelToken;
let cancel;

export default class ApiService {
 static hostUrl = process.env.REACT_APP_NODE_SERVICE_URL || window.location.origin;
 static apiUrl = `${this.hostUrl}/api`;

 static request(config) {

  if (cancel) {
   cancel();
  }

  config.cancelToken = new CancelToken(function(c) { cancel = c})

  return axios(config);
 }
}
