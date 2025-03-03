import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
  private api: AxiosInstance;
  private baseURL: string = 'http://localhost:8080';

  constructor() {
    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      withCredentials: true,
    });
  }

  getInstance(): AxiosInstance {
    return this.api;
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get<T>(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T>(url: string, data: object, config?: AxiosRequestConfig) {
    return this.api.post<T>(url, data, config);
  }

  addAuthHeader(token: string | undefined): AxiosRequestConfig {
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  }
}

const apiService = new ApiService();
export default apiService;
