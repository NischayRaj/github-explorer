// RepositoryListPage.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RepositoryPage = () => {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`
        );
        const userData = await userResponse.json();
        setUser(userData);

        const repositoriesResponse = await fetch(userData.repos_url);
        if (!repositoriesResponse.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const repositoriesData = await repositoriesResponse.json();
        setRepositories(repositoriesData);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching user data or repositories:", error);
      }
    };

    fetchUserData();
  }, [username]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.login}</h2>
        {/* Display other user info here */}
      </div>

      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryPage;
