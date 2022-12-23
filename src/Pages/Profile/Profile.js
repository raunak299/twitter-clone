import { Navigate, useNavigate } from "react-router-dom";
// import Layout from "../../Components/Layout/Layout";

function Profile() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    navigate("/authentication");
  };

  return (
    // <Layout>
    <button onClick={logoutHandler}>Logout</button>
    // </Layout>
  );
}

export default Profile;
