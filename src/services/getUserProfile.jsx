import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axios.post(
      `${API_URL}/user/profile`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Réponse de l'API:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du profil utilisateur:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default getUserProfile;
