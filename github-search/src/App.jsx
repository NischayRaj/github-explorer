// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import RepositoryPage from "./Components/RepositoryPage";
import RepositoryDetails from "./Components/RepositoryDetails";
import FollowersPage from "./Components/FollowerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository/:username" element={<RepositoryPage />} />
        <Route path="/repository/:id" element={<RepositoryDetails />} />
        <Route path="/followers/:username" element={<FollowersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
