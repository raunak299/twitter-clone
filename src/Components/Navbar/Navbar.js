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
import { useContext } from "react";
import themeContext from "../../Store/themeContext";
import { useEffect } from "react";

const Navbar = () => {
  const userId = localStorage.getItem("userId");

  const { theme, themeHandler } = useContext(themeContext);
  const changeThemeHandler = () => {
    themeHandler();
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={styles["navbar-small"]}>
        <Link
          to={`/profile/${userId}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <PermIdentityIcon />
        </Link>
        <NightlightRoundIcon onClick={changeThemeHandler} />
      </div>

      <div className={styles["navbar-large"]}>
        <div className={styles["icon-container"]}>
          <TwitterIcon />
        </div>

        <div className={styles["icon-container"]}>
          <Link
            to="/home"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <HomeIcon />
          </Link>
        </div>

        <div className={styles["icon-container"]}>
          <Link
            to="/search"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <SearchIcon />
          </Link>
        </div>

        <div className={styles["icon-container"]}>
          <Link
            to="/bookmarks"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <TurnedInNotIcon />
          </Link>
        </div>

        <div className={styles["icon-container"]}>
          <Link
            to={`/profile/${userId}`}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <PermIdentityIcon />
          </Link>
        </div>

        <div className={styles["icon-container"]} onClick={changeThemeHandler}>
          <NightlightRoundIcon />
        </div>
        <AddTweetBtn />
      </div>
    </>
  );
};

export default Navbar;
