import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const createCar = async (formData: FormData) => {
    return axios.post(`${API_BASE_URL}/cars`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true, // 如果用 Sanctum 认证需要这个
    });
  };
  
  // 获取汽车列表（例如未来用）
  export const getCars = async () => {
    return axios.get(`${API_BASE_URL}/cars`, { withCredentials: true });
  };
  
  // 获取单个汽车
  export const getCarById = async (id: number) => {
    return axios.get(`${API_BASE_URL}/cars/${id}`, { withCredentials: true });
  };