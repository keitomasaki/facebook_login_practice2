// export const ACCESS_TOKEN =
//   "EAAFJKdQqegUBAFgoBSUZCkyD0ZAM4UAYZCS534FM65pfgQBL529FM8vYOVF99J02kck29DAI5opQOYeuz2YGNIwo3UtBoZA3bqqX7o5cndduImxDiv1KAJ7Gzs2e21HQRyS8IVICNcCfugkZBZA3ITcZBd2QO41SlrGKw2wrFAIeb9pJFIysz4KZAhxBVECehftXeTvWrPaZBrfhWtDZArtsrl";
export const ACCESS_TOKEN =
  "EAAFJKdQqegUBAO2xzvyCmEvmZCaYxsmKnAZBtwrbpNJI5X6MZA9OsYYMQThuLpP0kovlaca144ggZBMuwE9LCzjZAvxxkJVEHTmKDjZC9y8Js9h6Lnqu8ZClvMy2bKjHvhUNkZAfPcDBkzO9E5kPww6YxR9qAIXK7na7wflHV0N02UjDhXiJgeiY";

export const url = `https://graph.facebook.com/v11.0/me/accounts?access_token=${ACCESS_TOKEN}`;

export const instagramUserNameUrl = `https://graph.facebook.com/v11.0/17841416678292582?fields=username&access_token=${ACCESS_TOKEN}`;

export const instagramUserMediaUrl = `https://graph.facebook.com/v11.0/17841416678292582/media?&access_token=${ACCESS_TOKEN}`;

export const instagramUserPhotoUrl = (id) => {
  return `https://graph.facebook.com/v11.0/${id}?fields=id,media_type,media_url,owner,timestamp&access_token=${ACCESS_TOKEN}`;
};
