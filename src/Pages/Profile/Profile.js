import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import useFetch from "../../custom-hooks/fetch-hook";
import TweetDetail from "../TweetDetail/TweetDetail";
import styles from "./Profile.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TweetCard from "../../Components/TweetCard/TweetCard";
import { Token } from "@mui/icons-material";
import { UserSliceAction } from "../../Store/UserSlice";
import { followHandler } from "../../Store/UserAction";

function Profile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/authentication");
  };

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(false);
  const [postListUser, setPostListUser] = useState([]);
  const { userId } = useParams();
  const loggedInUserId = localStorage.getItem("userId");
  const { sendRequest } = useFetch();
  const usersList = useSelector((state) => state.UserSliceReducer.users);
  const postList = useSelector((state) => state.PostSliceReducer.postData);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const postDataResponse = await sendRequest({
        url: `/api/posts`,
      });
      const userDataResponse = await sendRequest({
        url: `/api/users/${userId}`,
      });

      // console.log(userDataResponse.user);

      const postList = postDataResponse?.posts.filter(
        (post) => post.username === userDataResponse?.user.username
      );

      setUserData(userDataResponse.user);
      setPostListUser(postList);
      setLoading(false);
    })();
  }, [sendRequest, userId, postList, usersList]);

  const isUserAlreadyFollowed = userData?.followers?.filter(
    (item) => item["_id"] === loggedInUserId
  );

  const followHandlerFunc = async () => {
    const url =
      isUserAlreadyFollowed.length > 0
        ? `/api/users/unfollow/${userId}`
        : `/api/users/follow/${userId}`;
    dispatch(followHandler(sendRequest, url, userId));
  };

  const [profilePic, setProfilePic] = useState("");
  const addProfilePic = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setProfilePic(base64File);
  };

  // const removeTweetImg = () => {
  //   setTweetImg("");
  // };

  const editProfileDataHandler = async () => {};

  return (
    <Layout>
      {loading && <h1>Loading!!</h1>}
      {!loading && postList.length > 0 && userData && (
        <div className={styles["profile-sec"]}>
          <div className={styles["profile-modal"]}>
            <div>
              <img src={userData?.pic} />
              {loggedInUserId === userId && (
                <button onClick={editProfileDataHandler}>Edit Profile</button>
              )}
              {loggedInUserId !== userId && (
                <button onClick={followHandlerFunc}>Follow</button>
              )}
              <button onClick={logoutHandler}></button>
            </div>
            <div className={styles["profile-data"]}>
              <div>Raunak Raj</div>
              <div className={styles["followers-sec"]}>
                <span>{`${userData?.following?.length} following`}</span>
                <span>{`${userData?.followers?.length} followers`}</span>
              </div>
            </div>
          </div>
          <h3>Tweets</h3>
          <div className={styles["my-tweets"]}>
            {postListUser.map((postData, index) => (
              <TweetCard postData={postData} key={index} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Profile;
