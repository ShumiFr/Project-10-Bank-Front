import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

export const login = async (credentials) => {
  try {
    // Effectuer la requête de connexion
    const response = await axios.post(`${API_URL}/user/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Réponse de l'API:", response.data);

    // Vérifiez si le token est présent dans le body de la réponse
    if (response.data.body && response.data.body.token) {
      const token = response.data.body.token;

      // Stockez le token dans localStorage
      localStorage.setItem("token", token);
      console.log("Token stocké dans le localStorage:", token);

      return response.data;
    } else {
      console.error("Aucun token trouvé dans la réponse.");
    }

    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la connexion:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
