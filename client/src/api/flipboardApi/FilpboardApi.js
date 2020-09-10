import ApiService from '../Api'
import { getAttrValue, getTxtValue } from './Utilities'

export default class FilpboardApi extends ApiService {
  static get baseUrl () {
    return `${this.apiUrl}/flipboard`
  }

  static async requestArticles() {
    return this.request({
      url: this.baseUrl,
      method: 'get'
    })
  }

  static async requestArticle(link) {
    return this.request({
      url: `${this.baseUrl}/article`,
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      data: { link }
    })
  }

  static mapResponse(data) {
    return data.map((rawDataItem) => {
      return {
        title: getTxtValue(rawDataItem.title),
        description: getTxtValue(rawDataItem.description),
        guid: getTxtValue(rawDataItem.guid),
        link: getTxtValue(rawDataItem.link),
        pubDate: getTxtValue(rawDataItem.pubDate),
        media: getAttrValue(rawDataItem['media:content'])
      }
    })
  }
}
