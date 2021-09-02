import React from "react";
import FacebookLogin from "react-facebook-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const LoginButton = () => {
  const responseFacebook = (response) => {
    try {
      if (response.error) {
        console.log("error");
        console.log(response.error);
      } else {
        console.log("response2");
        console.log(response);
      }
    } catch (error) {
      console.error("error");
      console.error(error);
    }
  };
  return (
    <FacebookLogin
      textButton="Facebookでログインする"
      appId="4499411150110925"
      autoLoad={true}
      fields="name,email,picture"
      scope="instagram_basic,pages_show_list,public_profile"
      callback={responseFacebook}
      icon=" fa-facebook "
      returnScopes={true}
      // render={(renderProps) => <button>This is my custom FB button</button>}
    />
  );
};

export default LoginButton;
