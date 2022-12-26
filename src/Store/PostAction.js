import { PostSliceAction } from "./PostSlice";

export const addTweetHandler = (tweetImg, tweetContent, sendRequest) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    let userData = await sendRequest({ url: `/api/users/${userId}` });
    console.log(userData);
    let response = await sendRequest({
      url: "/api/posts",
      method: "POST",
      body: JSON.stringify({
        postData: {
          pic: tweetImg,
          content: tweetContent,
          likes: {
            likeCount: 0,
            likedBy: [],
            dislikedBy: [],
          },
          comments: [],
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
