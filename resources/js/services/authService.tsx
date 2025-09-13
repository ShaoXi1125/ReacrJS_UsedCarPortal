// services/authService.ts
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const login = async (email: string, password: string) => {
  return axios.post(
    `${API_BASE_URL}/login`,
    { email, password },
    { withCredentials: true } // ❗ 让浏览器带 cookie
  );
};
