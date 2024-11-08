import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";

function App() {
  // Récupérer les informations de l'utilisateur depuis le localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/user"
          element={<PrivateRoute element={<User user={user} />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
