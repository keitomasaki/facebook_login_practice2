import axios from "axios";
import {
  ACCESS_TOKEN,
  url,
  instagramUserNameUrl,
  instagramUserMediaUrl,
  instagramUserPhotoUrl,
} from "../Data/index";

let instagramUserMediaDataList;

const fetchInstagramBusinessAccount = (id) => {
  const url = `https://graph.facebook.com/v11.0/${id}?fields=instagram_business_account&access_token=${ACCESS_TOKEN}`;
  axios.get(`${url}`).then((result) => {
    console.log(result.data.instagram_business_account.id);
  });
};

export const fetchInstagramUser = () => {
  axios.get(`${url}`).then((result) => {
    console.log(result);
    fetchInstagramBusinessAccount(result.data.data[0].id);
  });
};
export const testInstagramUserName = () => {
  axios.get(`${instagramUserNameUrl}`).then((result) => {
    console.log(result);
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
      console.log(result);
    });
  });
};

// success
// GET /{ig-user-id}?fields={fields}
// 17841416678292582?fields=biography%2Cid%2Cusername%2Cwebsite&access_token=EAAFJKdQqegUBAIijZCAmRWpHS8MXUi0XXafnjFme13TyedgsN5TXpFuA7ZBE2UHkXBJ0GtTV7YFtGCXEhByoZAEbJCRxT0cs0c4F3L4bw3sowKScAuLBbImaq4vZB48opGE6A4JQ8SCQdx5CUkMGTcR0e8cyFD8ZCmkVmcguAMG53vSPYOcZCyV4IYfHbYZAIY0uZAizBnDEmRYCzlVf8Uss

//success
// userName only
//GET /{ig-user-id}?fields={fields}
//17841416678292582?fields=username&access_token=EAAFJKdQqegUBAIijZCAmRWpHS8MXUi0XXafnjFme13TyedgsN5TXpFuA7ZBE2UHkXBJ0GtTV7YFtGCXEhByoZAEbJCRxT0cs0c4F3L4bw3sowKScAuLBbImaq4vZB48opGE6A4JQ8SCQdx5CUkMGTcR0e8cyFD8ZCmkVmcguAMG53vSPYOcZCyV4IYfHbYZAIY0uZAizBnDEmRYCzlVf8Uss
