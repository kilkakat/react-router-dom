// import './App.css';
import { Routes, Route , Link } from 'react-router-dom';

import { BlogPage } from './pages/BlogPage';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <div>
      <header className="app-header">
      <Link to="/some-link">Home</Link>
      <Link to="/some-link">Blog</Link>
      <Link to="/some-link">About</Link>
      </header>

      <Routes>
        <Route path="/some-link" element={<HomePage />} />
        <Route path="/some-link" element={<BlogPage />} />
        <Route path="/some-link" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
