import axios from "axios";
import { API_URL } from "../utils/constants";

class ApiService {
  constructor() {}

  async request<T>({
    path,
    method,
    headers,
    body,
}: {
    path: string;
    method: string;
    headers?: Record<string, string>;
    body?: BodyInit;
}) {
    const response = await axios.request({
        url: `${API_URL}${path}`,
        method,
        headers,
        data: body,
    });

    return response.data as T;
}

  async getArchivos() {
    try {
      const data = await this.request({
        path: "/archivos",
        method: "GET",
      })
      return data
    } catch (e) {
      console.log(e);
    }
  }

  async getEnlaces() {
    try {
      const data = await this.request({
        path: "/enlaces",
        method: "GET",
      })
      return data
    } catch (e) {
      console.log(e);
    }
  }

}

export default new ApiService();
