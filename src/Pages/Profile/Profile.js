import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import useFetch from "../../custom-hooks/fetch-hook";
import TweetDetail from "../TweetDetail/TweetDetail";
import styles from "./Profile.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/authentication");
  };

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [postList, setPostList] = useState([]);
  const { userId } = useParams();
  const { sendRequest } = useFetch();
  const usersList = useSelector((state) => state.UserSliceReducer.users);
  // const postList = useSelector((state) => state.PostSliceReducer.postData);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const postDataResponse = await sendRequest({
        url: `/api/posts`,
      });
      const userDataResponse = await sendRequest({
        url: `/api/users/${userId}`,
      });

      const postList = postDataResponse?.posts.filter(
        (post) => post.username === userDataResponse?.user.username
      );

      setUserData(userDataResponse.user);
      setPostList(postList);
      setLoading(false);
      // setUserData(userDataResponse.user);
    })();
  }, [sendRequest, userId]);

  return (
    <Layout>
      {loading && <h1>Loading!!</h1>}
      {!loading && (
        <div className={styles["profile-sec"]}>
          <div className={styles["profile-modal"]}>
            <div>
              <img src={userData?.pic} />
              <button>Edit Profile</button>
            </div>
            <div className={styles["profile-data"]}>
              <div>Raunak Raj</div>
              <div className={styles["followers-sec"]}>
                <span>{`${userData?.following?.length} following`}</span>
                <span>{`${userData?.followers?.length} followers`}</span>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </Layout>
  );
}

export default Profile;
