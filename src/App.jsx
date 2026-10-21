import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Splash from './pages/Splash.jsx';
import Home from './pages/Home.jsx';
import Ingredients from './pages/Ingredients.jsx';
import Searching from './pages/Searching.jsx';
import Recipes from './pages/Recipes.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';

export default function App() {
  const location = useLocation();
  return (
    <div className="app">
      {/* Keyed wrapper re-mounts per route so the enter transition plays on each navigation. */}
      <main className="page" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
}
