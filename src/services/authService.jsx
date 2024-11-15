import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/user/login`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.data.body && response.data.body.token) {
    const token = response.data.body.token;
    localStorage.setItem("token", token);
    return response.data;
  }
};
