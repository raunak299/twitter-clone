import { PostSliceAction } from "./PostSlice";

const token = localStorage.getItem("token");

export const addTweetHandler = (tweetImg, tweetContent, sendRequest) => {
  return async (dispatch) => {
    let userData = await sendRequest({ url: "/api/users" });
    let response = await sendRequest({
      url: "/api/posts",
      method: "POST",
      body: JSON.stringify({
        postData: {
          pic: tweetImg,
          content: tweetContent,
          userData,
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
