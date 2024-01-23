// RepositoryPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RepositoryPage = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    const fetchRepositoryData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repositories/${id}`
        );
        const data = await response.json();
        setRepository(data);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchRepositoryData();
  }, [id]);

  if (!repository) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{repository.name}</h2>
      <p>{repository.description}</p>
    </div>
  );
};

export default RepositoryPage;
