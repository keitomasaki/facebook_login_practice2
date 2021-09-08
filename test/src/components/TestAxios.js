import React from "react";
import {
  fetchInstagramUser,
  testInstagramUserName,
  fetchInstagramUserMedia,
  fetchInstagramUserPhoto,
} from "../api";

const TestAxios = () => {
  return (
    <div>
      <button onClick={fetchInstagramUser}>fetchInstagramUser</button>
      <button onClick={testInstagramUserName}>testInstagramUserName</button>
      <button onClick={fetchInstagramUserMedia}>fetchInstagramUserMedia</button>
      <button onClick={fetchInstagramUserPhoto}>fetchInstagramUserPhoto</button>
    </div>
  );
};

export default TestAxios;
