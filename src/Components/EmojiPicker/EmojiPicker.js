import styles from "./EmojiPicker.module.css";
import { useRef } from "react";

function EmojiPicker(props) {
  const emojiLib = [
    ["🙂", "😊", "🤗", "😄"],
    ["😅", "😆", "😂", "🤣"],
    ["😘", "🥰", "😍", "🤩"],
    ["😇", "😎", "😋", "😜"],
    ["🙃", "😴", "🤯", "🥳"],
  ];

  const emojiSelectHandler = (e) => {
    props.selectEmojiHandler(e.target.innerText);
    // console.log(e.target.innerText);
  };

  return (
    <div className={styles["emoji-container"]}>
      {emojiLib.map((emojirow) => (
        <div className={styles["emoji-row"]}>
          {emojirow.map((emoji) => (
            <div onClick={emojiSelectHandler}>{emoji}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default EmojiPicker;
