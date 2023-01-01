import styles from "./OverlayModal.module.css";

function OverlayModal(props) {
  return (
    <div className={styles["modal-sec"]}>
      <div id="overlay-modal" className={styles["modal"]}>
        {props?.children}
      </div>
    </div>
  );
}

export default OverlayModal;
