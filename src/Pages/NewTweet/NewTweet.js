import Layout from "../../Components/Layout/Layout";
import styles from "./NewTweet.module.css";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "../../Components/EmojiPicker/EmojiPicker";
import CloseIcon from "@mui/icons-material/Close";
import profilepic from "../../assets/profile.jpg";

import { storage } from "../../firebase";

function NewTweet() {
  const [emojiPickerVisible, setEmojiPickerVisibility] = useState(false);

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

  const newTweetHandler = () => {
    console.log(textareaRef.current.value);
    console.log(tweetImg);
  };

  return (
    <div className={styles["new-tweet-page"]}>
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

export default NewTweet;
