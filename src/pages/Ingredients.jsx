import { useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import IngredientItem from '../components/IngredientItem.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { ingredients } from '../data/ingredients.js';
import { ASSETS } from '../data/assets.js';

export default function Ingredients() {
  const navigate = useNavigate();
  const { selected, add, remove } = useSelection();
  const toggle = (id) => (selected.includes(id) ? remove(id) : add(id));

  return (
    <section className="ingredients">
      <Header />
      <h1 className="title ingredients__title">Selecting ingredients. . .</h1>
      <img className="fridge fridge--small" src={ASSETS.ui.fridge} alt="Fridge" />

      <ul className="ingredients__grid" aria-label="Ingredients in your fridge">
        {ingredients.map((ing, i) => (
          <IngredientItem key={ing.id} ingredient={ing} index={i} selected={selected.includes(ing.id)} onToggle={toggle} />
        ))}
      </ul>

      <p className="sr-only" aria-live="polite">
        {selected.length} ingredient{selected.length === 1 ? '' : 's'} selected
      </p>

      {selected.length > 0 && (
        <div className="cta-bar">
          <button type="button" className="btn-primary" onClick={() => navigate('/searching')}>
            Find recipes ({selected.length})
          </button>
        </div>
      )}
    </section>
  );
}
