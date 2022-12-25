import "./App.css";
// import Button from '@mui/material/Button';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NewTweet from "./Pages/NewTweet/NewTweet";
import Authentication from "./Pages/Authentication/Authentication";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Pages/Profile/Profile";
import TweetDetail from "./Pages/TweetDetail/TweetDetail";

function App() {
  const login = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/tweet/:tweetId"
        element={
          <PrivateRoute>
            <TweetDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="/new-tweet"
        element={
          <PrivateRoute>
            <NewTweet />
          </PrivateRoute>
        }
      />
      <Route path="/bookmarks" element={<h2>bookmark page</h2>} />
      <Route path="/search" element={<h2>search page</h2>} />

      <Route path="/authentication" element={<Authentication />} />

      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
