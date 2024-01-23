import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Redirect to the repository list page with the entered username
  navigate(`/repositories/${username}`);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Home;
