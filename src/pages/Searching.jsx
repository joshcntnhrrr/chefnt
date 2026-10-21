import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { ASSETS } from '../data/assets.js';

const SEARCH_MS = 2500;

export default function Searching() {
  const navigate = useNavigate();
  const { selected } = useSelection();

  useEffect(() => {
    const t = setTimeout(() => navigate('/recipes', { replace: true, state: { selected } }), SEARCH_MS);
    return () => clearTimeout(t);
  }, [navigate, selected]);

  return (
    <section className="searching" aria-busy="true">
      <Header />
      <div className="searching__tools" aria-hidden="true">
        <img className="tool tool--board" src={ASSETS.loading.cuttingBoard} alt="" />
        <img className="tool tool--pan" src={ASSETS.loading.pan} alt="" />
        <img className="tool tool--mixer" src={ASSETS.loading.mixer} alt="" />
      </div>
      <p className="title searching__text" role="status">
        Perfect, we’re searching recipes with those selected ingredients. . .
      </p>
    </section>
  );
}
