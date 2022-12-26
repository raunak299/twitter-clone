import { PostSliceAction } from "./PostSlice";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("userId");

export const addTweetHandler = (tweetImg, tweetContent, sendRequest) => {
  return async (dispatch) => {
    let userData = await sendRequest({ url: `/api/users/${userId}` });
    console.log(userData);
    let response = await sendRequest({
      url: "/api/posts",
      method: "POST",
      body: JSON.stringify({
        postData: {
          pic: tweetImg,
          content: tweetContent,
          // userData,
        },
      }),
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
    dispatch(PostSliceAction.setPostData({ allPost: response.posts }));
  };
};
