import styles from "./TweetCard.module.css";
import pic from "../../assets/profile.jpg";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../custom-hooks/fetch-hook";
import { useDispatch, useSelector } from "react-redux";
import { PostSliceAction } from "../../Store/PostSlice";
import { Link } from "react-router-dom";
import { addToBookmark, removeFromBookmark } from "../../Store/BookmarkAction";
import { BookmarkSliceAction } from "../../Store/BookmarkSlice";

function TweetCard(props) {
  const { postData } = props;
  const token = localStorage.getItem("token");
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const bookmarkData = useSelector(
    (state) => state.BookmarkSliceReduder.bookmarkData
  );

  const likedByList = postData?.likes?.likedBy;
  let likedByLogInUser = likedByList.find((item) => item["_id"] === userId);
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
    dispatch(PostSliceAction.setPostData({ allPost: responseData.posts }));
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
          <BookmarkBorderIcon
            onClick={bookmarkHandler}
            className={isPostBookmarked ? styles["postBookmarked"] : ""}
          />
        </div>
      </div>
    </div>
  );
}

export default TweetCard;
