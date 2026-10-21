import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { getRecipe } from '../data/recipes.js';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = getRecipe(id);

  if (!recipe) {
    return (
      <section className="detail">
        <Header back backFallback="/recipes" />
        <h1 className="title">Recipe not found</h1>
        <Link className="btn-primary detail__missing" to="/home">Back to the fridge</Link>
      </section>
    );
  }

  return (
    <article className="detail">
      <Header back backFallback="/recipes" />
      <img className="detail__img" src={recipe.image} alt={recipe.name} />
      <h1 className="detail__title">{recipe.name}</h1>
      <ol className="steps">
        {recipe.steps.map((step) => (
          <li key={step.title}>
            <span className="steps__title">{step.title}</span>
            <p className="steps__text">{step.text}</p>
          </li>
        ))}
      </ol>
    </article>
  );
}
