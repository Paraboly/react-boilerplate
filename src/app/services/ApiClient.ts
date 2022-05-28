import axios from "axios";

export default abstract class ApiClient {
  static getResult(): Promise<void> {
    return axios
      .get("https://random.imagecdn.app/500/150")
      .then((response) => response.data);
  }
}
