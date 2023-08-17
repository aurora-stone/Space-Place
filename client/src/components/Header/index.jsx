import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const getEmoji = (sign) => {
    if (sign === "Aries") {
      return "♈"
    }
    if (sign === "Taurus") {
      return "♉"
    }
    if (sign === "Gemini") {
      return "♊"
    }
    if (sign === "Cancer") {
      return "♋"
    }
    if (sign === "Leo") {
      return "♌"
    }
    if (sign === "Virgo") {
      return "♍"
    }
    if (sign === "Libra") {
      return "♎"
    }
    if (sign === "Scorpio") {
      return "♏"
    }
    if (sign === "Sagitarrius") {
      return "♐"
    }
    if (sign === "Capricorn") {
      return "♑"
    }
    if (sign === "Aquarius") {
      return "♒"
    }
    if (sign === "Pisces") {
      return "♓"
    }
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Space Place</h1>
          </Link>
          <p className="m-0">Astro Blog</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Welcome {Auth.getProfile().data.username}! You're a {Auth.getProfile().data.sign} {getEmoji(Auth.getProfile().data.sign)} </span>
              {/* <span> {Auth.getProfile().data.sign}</span> */}
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
