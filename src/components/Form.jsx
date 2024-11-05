const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div className="input-remember">
        <input id="remember-me" type="checkbox" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in__button">
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
