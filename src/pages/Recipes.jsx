import { useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import RecipeCard from '../components/RecipeCard.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import { recipes, sortByMatches } from '../data/recipes.js';
import { ASSETS } from '../data/assets.js';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Recipes() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selected } = useSelection();
  const selection = state?.selected ?? selected;
  const list = useMemo(() => sortByMatches(recipes, selection), [selection]);

  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    cardRefs.current.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center);
      if (d < best) [best, nearest] = [d, i];
    });
    if (nearest !== active) setActive(nearest);
  };

  const scrollTo = (i) =>
    cardRefs.current[i]?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    });

  const recipe = list[active];

  return (
    <section className="recipes">
      <Header back backFallback="/ingredients" />

      <div className="carousel" ref={trackRef} onScroll={handleScroll} aria-roledescription="carousel" aria-label="Recipes">
        {list.map((r, i) => (
          <RecipeCard
            key={r.id}
            ref={(el) => (cardRefs.current[i] = el)}
            recipe={r}
            active={i === active}
            onClick={() => (i === active ? navigate(`/recipe/${r.id}`) : scrollTo(i))}
          />
        ))}
      </div>

      <div className="dots" role="tablist" aria-label="Choose recipe">
        {list.map((r, i) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            className={`dot${i === active ? ' is-active' : ''}`}
            aria-selected={i === active}
            aria-label={r.name}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>

      <div className="recipe-info" aria-live="polite">
        <h1 className="recipe-info__name">{recipe.name}</h1>
        <p className="recipe-info__desc">{recipe.description}</p>
        <dl className="recipe-info__meta">
          <div className="meta-row">
            <dt><img src={ASSETS.ui.difficulty} alt="Difficulty" /></dt>
            <dd>{recipe.difficulty}</dd>
          </div>
          <div className="meta-row">
            <dt><img src={ASSETS.ui.timer} alt="Time" /></dt>
            <dd>{recipe.time}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
