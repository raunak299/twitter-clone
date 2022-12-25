import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useRef, useState } from "react";
import EmojiPicker from "../../Components/EmojiPicker/EmojiPicker";
import CloseIcon from "@mui/icons-material/Close";
import profilepic from "../../assets/profile.jpg";
import { useDispatch } from "react-redux";
import styles from "./NewTweetContainer.module.css";
import useFetch from "../../custom-hooks/fetch-hook";
import { addTweetHandler } from "../../Store/PostAction";
import { Navigate, useNavigate } from "react-router-dom";

function NewTweetContainer() {
  const [emojiPickerVisible, setEmojiPickerVisibility] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const textareaRef = useRef();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const selectEmojiHandler = (emoji) => {
    setChosenEmoji(emoji);
    textareaRef.current.value += emoji;
  };

  // const increaseHeight = (e) => {
  //   e.target.style.height = e.target.scrollHeight + "px";
  // };

  const [tweetImg, setTweetImg] = useState("");
  const addTweetImg = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setTweetImg(base64File);
  };

  const removeTweetImg = () => {
    setTweetImg("");
  };

  const { sendRequest } = useFetch();
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  const newTweetHandler = async () => {
    console.log(textareaRef.current.value);
    // console.log(tweetImg);
    // sendRequest(
    //   {
    //     url: "/api/posts",
    //     method: "POST",
    //     body: JSON.stringify({
    //       postData: { pic: tweetImg, content: textareaRef.current.value },
    //     }),
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: token,
    //     },
    //   },
    //   (data) => {
    //     console.log(data);
    //     console.log(data.posts[0]["_id"]);
    // sendRequest(
    //   {
    //     url: `/api/posts/like/${data.posts[0]["_id"]}`,
    //     method: "POST",
    //     body: JSON.stringify({}),
    //     headers: {
    //       "content-type": "application/json",
    //       authorization: token,
    //     },
    // url: `/api/comments/add/${data.posts[0]["_id"]}`,
    // method: "POST",
    // body: JSON.stringify({ commentData: { content: "hello", userId } }),
    // headers: {
    //   "content-type": "application/json",
    //   authorization: token,
    // },
    //       },
    //       (data) => {
    //         console.log(data);
    //       }
    //     );
    //   }
    // );

    dispatch(addTweetHandler(tweetImg, textareaRef.current.value, sendRequest));
    navigate("/home");
  };

  return (
    <div className={styles["new-tweet-container"]}>
      <img
        src={profilepic}
        alt="profile-pic"
        className={styles["profile-pic"]}
      />

      <div className={styles["tweet-container"]}>
        <textarea
          type="text"
          placeholder="Whats Happening ?"
          ref={textareaRef}
        />
        {tweetImg && (
          <div className={styles["tweet-img"]}>
            <CloseIcon onClick={removeTweetImg} />
            <img src={tweetImg} alt="tweet-pic" />
          </div>
        )}

        <div className={styles["tweet-feature-container"]}>
          <div>
            <div className={styles["img-uploader"]}>
              <ImageIcon />
              <input type="file" onChange={addTweetImg} />
            </div>
            <InsertEmoticonIcon
              onClick={() => setEmojiPickerVisibility(!emojiPickerVisible)}
            />
          </div>
          <button className={styles["tweet-btn"]} onClick={newTweetHandler}>
            Tweet
          </button>
        </div>
        {emojiPickerVisible && (
          <div className={styles["emoji-picker"]}>
            <EmojiPicker selectEmojiHandler={selectEmojiHandler} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewTweetContainer;
