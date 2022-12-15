import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className={styles["layout"]}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
