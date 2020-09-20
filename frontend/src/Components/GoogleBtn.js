import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { deleteToken } from "../helper/checkToken";

function GoogleBtn(props) {
  const { loginUser, loggedIn, setUser } = props;

  const responseSuccessGoogle = (response) => {
    loginUser(response.tokenId);
  };

  const responseFailGoogle = (e) => {
    console.log(e);
  };

  const logout = () => {
    const user = {
      email: "",
      firstName: "",
      lastName: "",
      avatar: "",
      token: "",
      loggedIn: false,
    };

    setUser(user);
    deleteToken();
  };

  return !loggedIn ? (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_API_KEY}
      buttonText="Login with Google"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailGoogle}
      cookiePolicy={"single_host_origin"}
    />
  ) : (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_API_KEY}
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
  );
}

export default GoogleBtn;
