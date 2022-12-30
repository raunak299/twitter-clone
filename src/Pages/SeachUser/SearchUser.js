import styles from "./SearchUser.module.css";
import Layout from "../../Components/Layout/Layout";
import { Search } from "@mui/icons-material";
import useFetch from "../../custom-hooks/fetch-hook";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSliceAction } from "../../Store/UserSlice";
import { getUsersData } from "../../Store/UserAction";
import { Link } from "react-router-dom";
import { initializeConnect } from "react-redux/es/components/connect";

function SearchUser() {
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData(sendRequest));
  }, [sendRequest]);

  const userData = useSelector((state) => state.UserSliceReducer.users);
  const [foundUsers, setFoundUsers] = useState([]);
  const searchUserHandler = (e) => {
    const length = e.target.value.length;
    if (length === 0) {
      setFoundUsers([]);
      return;
    }
    const foundUserTemp = userData.filter((user) => {
      return user.username.substr(0, length) === e.target.value;
    });
    setFoundUsers(foundUserTemp);
  };

  return (
    <Layout>
      <div className={styles["search-user-sec"]}>
        <div className={styles["search-input-cont"]}>
          <Search />
          <input
            type="text"
            placeholder="Search User"
            onChange={searchUserHandler}
          />
        </div>
        <div className={styles["search-result-cont"]}>
          {foundUsers.length === 0 && (
            <h3 className={styles["no-users"]}>No users to show</h3>
          )}
          {foundUsers.map((user, index) => (
            <Link
              to={`/profile/${user["_id"]}`}
              style={{
                color: "var(--main-text-color)",
                textDecoration: "initial",
              }}
            >
              <div key={index}>
                <img src={user.pic}></img>
                <div>{user.username}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SearchUser;
