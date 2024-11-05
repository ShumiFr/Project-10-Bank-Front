import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;