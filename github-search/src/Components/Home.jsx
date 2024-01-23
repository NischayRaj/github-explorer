import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import '../Style/HomeStyle.css'
const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
  navigate(`/repositories/${username}`);
  };

  return (
    <div className="container">
      <h1 className="title">Github Explorer</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <button onClick={handleSubmit} className="button">
        Search
      </button>
    </div>
  );
};

export default Home;
