import Layout from "../../Components/Layout/Layout";
import TweetCard from "../../Components/TweetCard/TweetCard";
import { useDispatch, useSelector } from "react-redux";
import { PostSliceAction } from "../../Store/PostSlice";
import NewTweetContainer from "../NewTweet/NewTweetContainer";
import styles from "./Home.module.css";
import useFetch from "../../custom-hooks/fetch-hook";
import { useEffect, useState } from "react";

const Home = () => {
  // const postData = useDispatch((state) => state.PostSliceReducer.postData);
  const { sendRequest } = useFetch();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await sendRequest({ url: "/api/posts" });
      dispatch(PostSliceAction.setPostData({ allPost: response.posts }));
    })();
    setTimeout(() => setLoading(false), 1000);
  }, [dispatch, sendRequest]);

  const postData = useSelector((state) => state.PostSliceReducer.postData);

  return (
    <Layout>
      <div className={styles["home-page"]}>
        <div className={styles["new-tweet-container"]}>
          <NewTweetContainer />
        </div>
        {loading && <h1>Loading !!</h1>}
        {!loading &&
          postData.map((postData, index) => (
            <TweetCard postData={postData} key={index} />
          ))}
      </div>
    </Layout>
  );
};

export default Home;
