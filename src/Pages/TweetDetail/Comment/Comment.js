import styles from "./Comment.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { PostSliceAction } from "../../../Store/PostSlice";
import useFetch from "../../../custom-hooks/fetch-hook";
import { useParams } from "react-router-dom";

function Comment(props) {
  const { commentData } = props;
  const { tweetId } = useParams();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();
  const likedByList = commentData?.votes?.upvotedBy;
  let likedByLogInUser = likedByList.find((item) => item["_id"] === userId);

  const likeCommentHandler = async () => {
    let url = likedByLogInUser
      ? `/api/comments/downVote/${tweetId}/${commentData["_id"]}`
      : `/api/comments/upvote/${tweetId}/${commentData["_id"]}`;

    const responseData = await sendRequest({
      url: `/api/comments/upvote/${tweetId}/${commentData["_id"]}`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: token,
      },
    });
    if (responseData) {
      dispatch(PostSliceAction.setPostData({ allPost: responseData.posts }));
    }
  };

  const noOfLikes = commentData?.votes?.upvotedBy?.length;

  return (
    <div className={styles["comment"]}>
      <div className={styles["comment-sec"]}>
        <img src={commentData.userData.pic}></img>
        <div className={styles["comment-details"]}>
          <h3>{commentData.username}</h3>
          <div className={styles["comment-content"]}>{commentData.content}</div>
          <div className={styles["comment-action-sec"]}>
            <div className={styles["comment-like-sec"]}>
              <FavoriteBorderIcon
                onClick={likeCommentHandler}
                className={likedByLogInUser ? styles["likedByLogInUser"] : ""}
              />
              <div>{noOfLikes}</div>
            </div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
