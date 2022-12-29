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
import { addToBookmark, removeFromBookmark } from "../../Store/BookmarkAction";
import { addCommentHandler, likeTweetHandler } from "../../Store/PostAction";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NewTweetContainer from "../NewTweet/NewTweetContainer";

function TweetDetail() {
  const { tweetId } = useParams();
  const postDataList = useSelector((state) => state.PostSliceReducer.postData);
  const inputRef = useRef();
  const userId = localStorage.getItem("userId");
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState();
  const [editBtnVisible, setEditBtnVisibility] = useState(false);
  const [editModalVisible, setEditModalVisibility] = useState(false);
  const bookmarkData = useSelector(
    (state) => state.BookmarkSliceReducer.bookmarkData
  );

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

  const likedByList = postData?.likes?.likedBy;
  let likedByLogInUser = likedByList?.find((item) => item["_id"] === userId);
  const likeTweet = async () => {
    let url = likedByLogInUser
      ? `/api/posts/dislike/${postData["_id"]}`
      : `/api/posts/like/${postData["_id"]}`;
    dispatch(likeTweetHandler(sendRequest, url));
  };

  const addComment = async () => {
    dispatch(addCommentHandler(sendRequest, postData, inputRef.current.value));
  };

  const isPostBookmarked = bookmarkData.find(
    (item) => item["_id"] === postData["_id"]
  );
  const bookmarkHandler = async () => {
    if (!isPostBookmarked) {
      dispatch(addToBookmark(sendRequest, postData));
    } else {
      dispatch(removeFromBookmark(sendRequest, postData));
    }
  };

  const editPostHandler = () => {
    setEditModalVisibility(!editModalVisible);
  };

  return (
    <Layout>
      <div className={styles["tweet-details-page"]}>
        {editModalVisible && (
          <div className={styles["edit-tweet-modal"]}>
            <NewTweetContainer
              postData={postData}
              setEditModalVisibility={setEditModalVisibility}
              setEditBtnVisibility={setEditBtnVisibility}
            />
          </div>
        )}
        {!loading && !editModalVisible && postData && (
          <div className={styles["tweet-component"]}>
            <div className={styles["tweet-user-details"]}>
              <div>
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
              <div className={styles["edit-post-container"]}>
                {postData.userId === userId && (
                  <MoreHorizIcon
                    onClick={() => setEditBtnVisibility(!editBtnVisible)}
                  />
                )}
                {editBtnVisible && <div onClick={editPostHandler}>Edit</div>}
              </div>
            </div>

            <div className={styles["tweet-content"]}>
              <div>{postData.content}</div>
              {postData.pic && <img src={postData.pic} alt="pic"></img>}
            </div>

            <div className={styles["tweet-action-container"]}>
              <div className={styles["tweet-action-item-cont"]}>
                <FavoriteBorder
                  onClick={likeTweet}
                  className={likedByLogInUser ? styles["likedByLogInUser"] : ""}
                />
                <div>{postData.likes.likeCount}</div>
              </div>

              <div className={styles["tweet-action-item-cont"]}>
                <ChatBubbleOutlineIcon />
                <div>{postData?.length}</div>
              </div>

              <div className={styles["tweet-action-item-cont"]}>
                <BookmarkBorderIcon
                  onClick={bookmarkHandler}
                  className={isPostBookmarked ? styles["postBookmarked"] : ""}
                />
              </div>
            </div>

            <div className={styles["comment-container"]}>
              <div className={styles["add-comment-container"]}>
                <input type="text" ref={inputRef} />
                <button onClick={addComment}>Comment</button>
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
