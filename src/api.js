import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://142.93.246.144";

export default class Api {
  config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  async fetchLogin(data) {
    try {
      const signin = await axios.post("/login", data);
      return signin.data;
    } catch (err) {
      console.log(err);
    }
  }
  async fetchSignup(body) {
    try {
      const signup = await axios.post("signup", body, this.config);
      return signup.data;
    } catch (error) {
      toast.error(error);
    }
  }
  async fetchMessage() {
    try {
      const message = await axios.get("/messages", this.config);
      return message.data;
    } catch (error) {
      console.log(error);
    }
  }
  async fetchSendMessage(body) {
    try {
      const message = await axios.post("/messages", body, this.config);
      return message.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export const api = new Api();
