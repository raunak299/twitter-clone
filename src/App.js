import "./App.css";
// import Button from '@mui/material/Button';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import NewTweet from "./Pages/NewTweet/NewTweet";
import Authentication from "./Pages/Authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/new-tweet" element={<NewTweet />} />
      <Route path="/bookmarks" element={<h2>bookmark page</h2>} />
      <Route path="/search" element={<h2>search page</h2>} />
      <Route path="/authentication" element={<Authentication />} />
      <Route path="/profile" element={<h2>profile page</h2>} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
