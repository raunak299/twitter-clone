import styles from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import TwitterIcon from "@mui/icons-material/Twitter";
// import AddIcon from "@mui/icons-material/Add";
import AddTweetBtn from "../AddTweetBtn/AddTweetBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles["navbar-small"]}>
        <Link to="/profile">
          <PermIdentityIcon />
        </Link>
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
          <Link to="/profile" className={styles["decoration"]}>
            <PermIdentityIcon />
          </Link>
        </div>
        <div className={styles["icon-container"]}>
          <NightlightRoundIcon />
        </div>
        <AddTweetBtn />
      </div>
    </>
  );
};

export default Navbar;
