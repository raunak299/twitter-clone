import styles from "./Footer.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

const Footer = () => {
  return (
    <>
      <div className={styles["footer-small"]}>
        <div className={styles["icon-container"]}>
          <HomeIcon />
        </div>
        <div className={styles["icon-container"]}>
          <SearchIcon />
        </div>
        <div className={styles["icon-container"]}>
          <TurnedInNotIcon />
        </div>
      </div>
    </>
  );
};

export default Footer;