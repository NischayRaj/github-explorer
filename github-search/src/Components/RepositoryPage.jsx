import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../Style/RepoStyle.css'
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
        <img className="avatar" src={user.avatar_url} alt={user.login} />
        <h2>{user.login}</h2>
      </div>

      <div className="card-container">
        {repositories.map((repo) => (
          <div key={repo.id} className="card">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoryPage;
