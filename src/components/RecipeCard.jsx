import { forwardRef } from 'react';

const RecipeCard = forwardRef(function RecipeCard({ recipe, active, onClick }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className={`recipe-card${active ? ' is-active' : ''}`}
      onClick={onClick}
      aria-label={active ? `Open ${recipe.name}` : `Show ${recipe.name}`}
      aria-current={active || undefined}
    >
      <img src={recipe.image} alt={recipe.name} draggable="false" />
    </button>
  );
});

export default RecipeCard;
