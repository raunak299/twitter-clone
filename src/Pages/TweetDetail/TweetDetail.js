import styles from "./TweetDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useEffect, useState } from "react";
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

  const { sendRequest } = useFetch();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState();

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
      //   setLoading(true);
      const response = await sendRequest({ url: `/api/posts/${tweetId}` });
      setPostData(response?.post);
      //   setLoading(false);
    })();
  }, [tweetId, sendRequest, postDataList]);

  const likeTweetHandler = async () => {
    const likedBy = postData.likes.likedBy;
    let url = likedBy.find((item) => item["_id"] === postData.userId)
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
    // console.log(responseData);
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
                <FavoriteBorder onClick={likeTweetHandler} />
                <div>{postData.likes.likeCount}</div>
              </div>

              <div className={styles["tweet-action-item-cont"]}>
                <ChatBubbleOutlineIcon />
              </div>

              <div className={styles["tweet-action-item-cont"]}>
                <BookmarkBorderIcon />
              </div>
            </div>

            <div className={styles["comment-container"]}>
              <div className={styles["add-comment-container"]}>
                <input type="text" />
                <button>Comment</button>
              </div>
              <Comment />
              <Comment />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default TweetDetail;
