import styles from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-small"]}>
        <PermIdentityIcon />
        <NightlightRoundIcon />
      </div>

      <div className={styles["navbar-large"]}>
        <div className={styles["icon-container"]}>
          <TwitterIcon />
        </div>
        <div className={styles["icon-container"]}>
          <HomeIcon />
        </div>
        <div className={styles["icon-container"]}>
          <SearchIcon />
        </div>
        <div className={styles["icon-container"]}>
          <TurnedInNotIcon />
        </div>
        <div className={styles["icon-container"]}>
          <PermIdentityIcon />
        </div>
        <div className={styles["icon-container"]}>
          <NightlightRoundIcon />
        </div>
        <div className={styles["icon-container"]}>
          <AddIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
