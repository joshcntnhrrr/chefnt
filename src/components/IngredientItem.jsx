import { ASSETS } from '../data/assets.js';

export default function IngredientItem({ ingredient, selected, onToggle, index }) {
  const action = selected ? 'Remove' : 'Add';
  return (
    <li className={`ingredient${selected ? ' is-selected' : ''}`} style={{ '--i': index }}>
      <img className="ingredient__img" src={ingredient.image} alt={ingredient.name} />
      <button
        type="button"
        className="ingredient__toggle"
        onClick={() => onToggle(ingredient.id)}
        aria-pressed={selected}
        aria-label={`${action} ${ingredient.name.toLowerCase()}`}
      >
        <img src={selected ? ASSETS.ui.minus : ASSETS.ui.plus} alt="" />
      </button>
    </li>
  );
}
