import axios from "axios";
import {
  ACCESS_TOKEN,
  url,
  instagramUserNameUrl,
  instagramUserMediaUrl,
  instagramUserPhotoUrl,
} from "../Data/index";

let instagramUserMediaDataList;

const INSTAGRAM_GRAPH_API = axios.create({
  baseURL: "https://graph.facebook.com/v11.0",
});

export const fetchInstagramBusinessAccount = (facebookPageId, accessToken) => {
  return new Promise(async (resolve) => {
    const url = `${facebookPageId}?fields=instagram_business_account&access_token=${accessToken}`;
    let ig_user_id;
    await INSTAGRAM_GRAPH_API.get(`/${url}`).then((result) => {
      console.log(result.data.instagram_business_account.id);
      ig_user_id = result.data.instagram_business_account.id;
    });
    resolve(ig_user_id);
  });
};

export const fetchInstagramUser = () => {
  INSTAGRAM_GRAPH_API.get(`me/accounts?access_token=${ACCESS_TOKEN}`).then(
    async (result) => {
      const facebookPageId = result.data.data[0].id;
      console.log(result);
      const ig_user_id = await fetchInstagramBusinessAccount(
        facebookPageId,
        ACCESS_TOKEN
      );
      console.log("11111111", ig_user_id);
      const ig_user_name = fetchInstagramUserName(ig_user_id);
    }
  );
};

export const fetchInstagramUserName = async (ig_user_id) => {
  console.log("22222222222", ig_user_id);
  const url = `${ig_user_id}?fields=username&access_token=${ACCESS_TOKEN}`;
  await INSTAGRAM_GRAPH_API.get(`/${url}`).then((result) => {
    console.log(result.data.username);
  });
};
export const fetchInstagramUserMedia = () => {
  axios.get(`${instagramUserMediaUrl}`).then((result) => {
    console.log(result.data.data.map((item) => item.id));
    instagramUserMediaDataList = result.data.data;
  });
};

export const fetchInstagramUserPhoto = () => {
  let dataList = [];
  console.log(instagramUserMediaDataList);
  instagramUserMediaDataList.map((item) => {
    const url = instagramUserPhotoUrl(item.id);
    console.log(url);
    axios.get(`${url}`).then((result) => {
      console.log(result.data);
    });
  });
};

export const fetchFacebookPageId = () => {
  console.log("---");
  return new Promise(async (resolve) => {
    let facebookPageId;
    await INSTAGRAM_GRAPH_API.get(
      `me/accounts?access_token=${ACCESS_TOKEN}`
    ).then((result) => {
      console.log("fetchFacebookAccount", result);
      facebookPageId = result.data.data[0].id;
    });
    resolve(facebookPageId);
  });
};

// success
// GET /{ig-user-id}?fields={fields}
// 17841416678292582?fields=biography%2Cid%2Cusername%2Cwebsite&access_token=EAAFJKdQqegUBAIijZCAmRWpHS8MXUi0XXafnjFme13TyedgsN5TXpFuA7ZBE2UHkXBJ0GtTV7YFtGCXEhByoZAEbJCRxT0cs0c4F3L4bw3sowKScAuLBbImaq4vZB48opGE6A4JQ8SCQdx5CUkMGTcR0e8cyFD8ZCmkVmcguAMG53vSPYOcZCyV4IYfHbYZAIY0uZAizBnDEmRYCzlVf8Uss

//success
// userName only
//GET /{ig-user-id}?fields={fields}
//17841416678292582?fields=username&access_token=EAAFJKdQqegUBAIijZCAmRWpHS8MXUi0XXafnjFme13TyedgsN5TXpFuA7ZBE2UHkXBJ0GtTV7YFtGCXEhByoZAEbJCRxT0cs0c4F3L4bw3sowKScAuLBbImaq4vZB48opGE6A4JQ8SCQdx5CUkMGTcR0e8cyFD8ZCmkVmcguAMG53vSPYOcZCyV4IYfHbYZAIY0uZAizBnDEmRYCzlVf8Uss
