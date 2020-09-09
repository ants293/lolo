import ApiService from "../Api";
import { getAttrValue, getTxtValue } from "./Utilities";

export default class FilpboardApi extends ApiService {

    static get baseUrl() {
        return `${this.apiUrl}/flipboard`;
    }
    static baseApiUrl = `${this.apiUrl}/flipboard`;

    static async getArticles() {
        return this.request({
            url: this.baseUrl,
            method: 'get'
        });
    }

    static mapResponse(data) {
        const textProperties = ['category', 'description', 'guid', 'link', 'pubDate', 'title'];
        const attributeProperties = ['media:content'];

        const mappedResponse = data.map((rawDataItem) => {
            const articleObject = {};


            for (let i = 0; i < textProperties.length; i++) {
                const property = textProperties[i];
                articleObject[property] = rawDataItem[property] && getTxtValue(rawDataItem[property]) || null;
            }

            for (let i = 0; i < attributeProperties.length; i++) {
                const property = attributeProperties[i];
                articleObject[property] = rawDataItem[property] && getAttrValue(rawDataItem[property]) || null;
            }

            return articleObject;

        })

        return mappedResponse;
    }

}
