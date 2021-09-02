import React from "react";
import FacebookLogin from "react-facebook-login";

const LoginButton = () => {
  const responseFacebook = (response) => {
    console.log("response");
    console.log(response);
  };
  return (
    <FacebookLogin
      appId="4499411150110925"
      autoLoad={true}
      fields="name,email,picture"
      scope="instagram_basic,pages_show_list"
      callback={responseFacebook}
    />
  );
};

export default LoginButton;
