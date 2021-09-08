import React from "react";
import FacebookLogin from "react-facebook-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const LoginButton = (props) => {
  const { fetchUserData } = props;
  const responseFacebook = (response) => {
    try {
      if (response.error) {
        console.log("error");
        console.log(response.error);
      } else {
        console.log("response");
        console.log(response);
        fetchUserData(response);
        if (response.grantedScopes.indexOf("instagram_basic") !== -1) {
          console.log("success");
        } else {
          console.log("failed");
        }
      }
    } catch (error) {
      console.error("error");
      console.error(error);
    }
  };
  return (
    <FacebookLogin
      textButton="Facebookでログインする"
      appId="567363451132413"
      autoLoad={false}
      fields="name,email,picture"
      scope="instagram_basic,pages_show_list,public_profile,"
      callback={responseFacebook}
      icon=" fa-facebook "
      returnScopes={true}
      // render={(renderProps) => <button>This is my custom FB button</button>}
    />
  );
};

export default LoginButton;
