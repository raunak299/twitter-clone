import styles from "./TweetCard.module.css";
import pic from "../../assets/profile.jpg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../custom-hooks/fetch-hook";
import { useDispatch } from "react-redux";
import { PostSliceAction } from "../../Store/PostSlice";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TweetCard(props) {
  const { postData } = props;
  const token = localStorage.getItem("token");
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");

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
    dispatch(PostSliceAction.setPostData({ allPost: responseData.posts }));
  };

  const likedByList = postData?.likes?.likedBy;
  let likedByLogInUser = likedByList.find((item) => item["_id"] === userId);

  return (
    <div className={styles["tweet-component"]}>
      <div className={styles["tweet-user-details"]}>
        <img src={pic} className={styles["user-pic"]}></img>
        <div className={styles["user-name-date"]}>
          <div>Raunak Raj</div>
          <div>27-12-2022</div>
        </div>
      </div>

      <Link
        to={`/tweet/${postData["_id"]}`}
        style={{ color: "inherit", textDecoration: "inherit", width: "100%" }}
      >
        <div className={styles["tweet-content"]}>
          <div>{postData.content}</div>
          {postData.pic && <img src={postData.pic}></img>}
        </div>
      </Link>

      <div className={styles["tweet-action-container"]}>
        <div className={styles["tweet-action-item-cont"]}>
          <FavoriteBorder
            onClick={likeTweetHandler}
            className={likedByLogInUser ? styles["likedByLogInUser"] : ""}
          />
          <div>{postData.likes.likeCount}</div>
        </div>

        <Link
          to={`/tweet/${postData["_id"]}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <div className={styles["tweet-action-item-cont"]}>
            <ChatBubbleOutlineIcon />
            <div>{postData?.comments?.length}</div>
          </div>
        </Link>

        <div className={styles["tweet-action-item-cont"]}>
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
