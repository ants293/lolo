import ApiService from "../Api";

export default class FilpboardApi extends ApiService {
    static baseApiUrl = this.hostUrl;

    static get articles() {
        return this.request({
            url: `${this.baseApiUrl}/api`,
            method: 'get'
        });
    }
}
