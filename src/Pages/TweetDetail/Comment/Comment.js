import styles from "./Comment.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Comment() {
  return (
    <div className={styles["comment"]}>
      <div className={styles["comment-sec"]}>
        <img src=""></img>
        <div className={styles["comment-details"]}>
          <h3>User Name</h3>
          <div className={styles["comment-content"]}>content xvsdvdv</div>
          <div className={styles["comment-action-sec"]}>
            <div className={styles["comment-like-sec"]}>
              <FavoriteBorderIcon />
              <div>0</div>
            </div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
