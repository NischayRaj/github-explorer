import React, { useState } from "react";

const Home = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = () => {
    onSubmit(username);
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
