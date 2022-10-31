import axios from "axios";

axios.defaults.baseURL = "http://142.93.246.144";

export default class Api {
  async fetchData(url, method, data) {
    const response = await axios({
      url,
      method,
      data,
    });
  }
}

export const api = new Api();
