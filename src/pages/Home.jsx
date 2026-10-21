import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { ASSETS } from '../data/assets.js';

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home">
      <Header />
      <h1 className="title home__title">What are we cooking today?</h1>
      <button type="button" className="fridge-button" onClick={() => navigate('/ingredients')} aria-label="Open the fridge">
        <img className="fridge fridge--float" src={ASSETS.ui.fridge} alt="" />
      </button>
    </section>
  );
}
