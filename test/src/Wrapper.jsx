import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import TestAxios from "./components/TestAxios";

const Wrapper = () => {
  const [data, setData] = useState();

  const fetchUserData = (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <div>
      <LoginButton fetchUserData={fetchUserData} />
      <TestAxios />
    </div>
  );
};

export default Wrapper;
