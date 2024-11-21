import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export const updateUserProfile = async (data) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }

  const response = await axios.put(`${API_URL}/user/profile`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
