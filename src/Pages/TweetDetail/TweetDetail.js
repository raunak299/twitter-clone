import styles from "./TweetDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useEffect, useRef, useState } from "react";
import useFetch from "../../custom-hooks/fetch-hook";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import pic from "../../assets/profile.jpg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { PostSliceAction } from "../../Store/PostSlice";
import Comment from "./Comment/Comment";

function TweetDetail() {
  const { tweetId } = useParams();
  const postDataList = useSelector((state) => state.PostSliceReducer.postData);
  const token = localStorage.getItem("token");
  const inputRef = useRef();
  const userId = localStorage.getItem("userId");
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState();
  const likedByList = postData?.likes?.likedBy;
  let likedByLogInUser = likedByList?.find((item) => item["_id"] === userId);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await sendRequest({ url: `/api/posts/${tweetId}` });
      setPostData(response?.post);
      setLoading(false);
    })();
  }, [tweetId, sendRequest]);

  useEffect(() => {
    (async () => {
      const response = await sendRequest({ url: `/api/posts/${tweetId}` });
      setPostData(response?.post);
    })();
  }, [tweetId, sendRequest, postDataList]);

  const likeTweetHandler = async () => {
    let url = likedByLogInUser
      ? `/api/posts/dislike/${postData["_id"]}`
      : `/api/posts/like/${postData["_id"]}`;

    const responseData = await sendRequest({
      url,
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
    if (responseData) {
      dispatch(PostSliceAction.setPostData({ allPost: responseData.posts }));
    }
  };

  const addCommentHandler = async () => {
    let temp = await sendRequest({ url: `/api/posts/${postData["_id"]}` });
    console.log(temp);
    let userData = await sendRequest({ url: `/api/users/${userId}` });
    const responseData = await sendRequest({
      url: `/api/comments/add/${postData["_id"]}`,
      method: "POST",
      body: JSON.stringify({
        commentData: {
          content: inputRef.current.value,
          userData: userData.user,
        },
      }),
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
    if (responseData) {
      dispatch(PostSliceAction.setPostData({ allPost: responseData.posts }));
    }
  };

  return (
    <Layout>
      <div className={styles["tweet-details-page"]}>
        {!loading && postData && (
          <div className={styles["tweet-component"]}>
            <div className={styles["tweet-user-details"]}>
              <img
                src={pic}
                className={styles["user-pic"]}
                alt="profile-pic"
              ></img>
              <div className={styles["user-name-date"]}>
                <div>Raunak Raj</div>
                <div>27-12-2022</div>
              </div>
            </div>

            <div className={styles["tweet-content"]}>
              <div>{postData.content}</div>
              {postData.pic && <img src={postData.pic} alt="pic"></img>}
            </div>

            <div className={styles["tweet-action-container"]}>
              <div className={styles["tweet-action-item-cont"]}>
                <FavoriteBorder
                  onClick={likeTweetHandler}
                  className={likedByLogInUser ? styles["likedByLogInUser"] : ""}
                />
                <div>{postData.likes.likeCount}</div>
              </div>

              <div className={styles["tweet-action-item-cont"]}>
                <ChatBubbleOutlineIcon />
                <div>{postData?.length}</div>
              </div>

              <div className={styles["tweet-action-item-cont"]}>
                <BookmarkBorderIcon />
              </div>
            </div>

            <div className={styles["comment-container"]}>
              <div className={styles["add-comment-container"]}>
                <input type="text" ref={inputRef} />
                <button onClick={addCommentHandler}>Comment</button>
              </div>
              {postData.comments?.map((commentData, index) => (
                <Comment key={index} commentData={commentData} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default TweetDetail;
