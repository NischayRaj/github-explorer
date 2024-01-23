import React from "react";

const RepositoryListPage = ({
  user,
  repositories,
  onViewRepositoryDetails,
  onViewFollowers,
}) => {
  return (
    <div>
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.login}</h2>
      </div>

      <ul>
        {repositories.map((repo) => (
          <li key={repo.id} onClick={() => onViewRepositoryDetails(repo)}>
            {repo.name}
          </li>
        ))}
      </ul>

      <button onClick={onViewFollowers}>View Followers</button>
    </div>
  );
};

export default RepositoryListPage;
