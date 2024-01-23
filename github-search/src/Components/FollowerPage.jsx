// Import necessary hooks from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FollowersPage = ({ match }) => {
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch followers data when the component mounts
    const fetchFollowersData = async () => {
      const username = match.params.username;
      const followersResponse = await fetch(
        `https://api.github.com/users/${username}/followers`
      );
      const followersData = await followersResponse.json();
      setFollowers(followersData);
    };

    fetchFollowersData();
  }, [match.params.username]);

  const onViewFollowerRepositoryList = (follower) => {
    // Redirect to the repository list page of the selected follower
    navigate(`/repositories/${follower.login}`);
  };

  return (
    <div>
      <ul>
        {followers.map((follower) => (
          <li
            key={follower.id}
            onClick={() => onViewFollowerRepositoryList(follower)}
          >
            {follower.login}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersPage;
