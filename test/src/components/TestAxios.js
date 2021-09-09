import React from "react";
import {
  fetchInstagramUser,
  fetchInstagramBusinessAccount,
  fetchInstagramUserName,
  fetchInstagramUserMedia,
  fetchInstagramUserPhoto,
  fetchFacebookPageId,
} from "../api";
import { ACCESS_TOKEN } from "../Data";

const TestAxios = () => {
  const getFetchInstagramData = async () => {
    const facebookPageId = await fetchFacebookPageId();
    const ig_user_id = await fetchInstagramBusinessAccount(
      facebookPageId,
      ACCESS_TOKEN
    );
    const ig_user_name = fetchInstagramUserName(ig_user_id);
  };
  return (
    <div>
      <button onClick={fetchInstagramUser}>fetchInstagramUser</button>
      <button onClick={fetchInstagramUserName}>fetchInstagramUserName</button>
      <button onClick={fetchInstagramUserMedia}>fetchInstagramUserMedia</button>
      <button onClick={fetchInstagramUserPhoto}>fetchInstagramUserPhoto</button>
      <button onClick={getFetchInstagramData}>getFetchInstagramData</button>
    </div>
  );
};

export default TestAxios;
