import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile, logout } from "../store/userSlice";
import logo from "../assets/argentBankLogo.png";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // Vérifie la présence du token dans localStorage au chargement du Header
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !user) {
      dispatch(fetchUserProfile()); // Récupérer le profil si le token est présent
    }
  }, [dispatch, user]);

  // Fonction de déconnexion
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="header-nav">
      <a className="header-nav__logo" href="/home">
        <img
          className="header-nav__logo-image"
          src={logo}
          alt="Logo ArgentBank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>

      {user ? (
        <div>
          <a className="header-nav__item" href="/profile">
            <i className="fa fa-user"></i> {user.firstName}
          </a>
          <button className="header-nav__item__button" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i> Logout
          </button>
        </div>
      ) : (
        <div>
          <a className="header-nav__item" href="/profile">
            <i className="fa fa-user-circle"></i> Sign In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
