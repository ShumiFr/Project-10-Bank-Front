import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

const Form = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      setError("Échec de la connexion. Veuillez vérifier vos informations.");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <div className="input-remember">
        <input id="remember-me" type="checkbox" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in__button">
        Sign In
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
