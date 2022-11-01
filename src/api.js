import axios from "axios";

axios.defaults.baseURL = "http://142.93.246.144";

export default class Api {
  async fetchMessage() {
    try {
      const config = {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      };
      const message = await axios.get('/messages', config)
      return message.data
    } catch (error) {
      console.log(error);
    }
  }
  async fetchLogin(data) {
    try {
      const login = await axios.post('/login', data)
      return login.data
    } catch (error) {
      console.log(error);
    }
  }
  // async fetchSendMessage() {
  //   try {
  //     axios.post('/messages')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
export const api = new Api();