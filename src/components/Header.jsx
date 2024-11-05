import logo from "../assets/argentBankLogo.png";

const Header = () => {
  return (
    <nav className="header-nav">
      <a className="header-nav__logo" href="">
        <img
          className="header-nav__logo-image"
          src={logo}
          alt="Logo ArgentBank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="header-nav__item" href="">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Header;
