import Layout from "../Components/Layout/Layout";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles["home-page"]}>
        <div className={styles["tweet-component"]}>
          <div className={styles["tweet-user-details"]}>
            <img></img>
            <div className={styles["user-name-date"]}>
              <div>Raunak Raj</div>
              <div>27-12-2022</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
