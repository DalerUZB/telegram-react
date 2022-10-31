import axios from "axios";

axios.defaults.baseURL = "http://142.93.246.144";

export default class Api {
  async fetchData(url, method, data) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    if (method === 'post') {
      delete config.headers['Content-Type']

    }
    await axios({ url, method, data, }).then(res => {
      try {
        return res
      } catch (error) {
        console.log(error);
      }
    })
  }
}
export const api = new Api();