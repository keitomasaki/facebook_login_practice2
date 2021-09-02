import React from "react";
// import FacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

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
      scope="instagram_basic,pages_show_list,public_profile"
      callback={responseFacebook}
      icon=" fa-facebook "
      render={(renderProps) => <button>This is my custom FB button</button>}
    />
  );
};

export default LoginButton;
