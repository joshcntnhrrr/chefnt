import { ASSETS } from './assets.js';

export const recipes = [
  {
    id: 'omelette',
    name: 'Omelette',
    image: ASSETS.recipes.omelette,
    description: 'It is a dish made with eggs, fried in butter and oil in a skillet.',
    ingredients: ['egg', 'cheese', 'garlic', 'chili'],
    difficulty: 'Medium',
    time: '5 Minutes',
    steps: [
      { title: 'Beat the eggs', text: 'Crack 2–3 eggs into a bowl and beat them with a fork or whisk. Add salt and pepper to taste.' },
      { title: 'Prepare the skillet', text: 'Heat a nonstick skillet over medium heat and add a little butter or oil.' },
      { title: 'Pour in the eggs', text: 'When the butter has melted or the oil is hot, pour the egg mixture into the skillet.' },
      { title: 'Cook the base', text: 'Let the eggs cook for 1–2 minutes. Gently lift the edges with a spatula so the runny egg flows down.' },
      { title: 'Add the filling', text: 'When the top is almost set, sprinkle the cheese, minced garlic and chili over one half of the omelette.' },
      { title: 'Fold and serve', text: 'Fold the omelette in half with the spatula, slide it onto a plate and serve it hot.' },
    ],
  },
  {
    id: 'fried-egg',
    name: 'Fried Egg',
    image: ASSETS.recipes.friedEgg,
    description: 'A classic egg fried sunny side up, with a crispy edge and a runny yolk.',
    ingredients: ['egg', 'chili'],
    difficulty: 'Easy',
    time: '3 Minutes',
    steps: [
      { title: 'Heat the pan', text: 'Heat a skillet over medium heat with a tablespoon of oil.' },
      { title: 'Crack the egg', text: 'Crack the egg gently into the pan, keeping the yolk whole.' },
      { title: 'Cook the white', text: 'Cook for 2–3 minutes, spooning hot oil over the white until it sets.' },
      { title: 'Season and serve', text: 'Season with salt and a pinch of chopped chili, then serve right away.' },
    ],
  },
  {
    id: 'scrambled-eggs',
    name: 'Scrambled Eggs',
    image: ASSETS.recipes.scrambledEggs,
    description: 'Soft and creamy eggs stirred slowly over low heat, finished with cheese.',
    ingredients: ['egg', 'cheese', 'garlic'],
    difficulty: 'Easy',
    time: '7 Minutes',
    steps: [
      { title: 'Whisk the eggs', text: 'Whisk 3 eggs with a pinch of salt until smooth.' },
      { title: 'Soften the garlic', text: 'Melt butter over low heat and cook a little minced garlic for 30 seconds.' },
      { title: 'Stir slowly', text: 'Pour in the eggs and stir constantly with a spatula, forming soft curds.' },
      { title: 'Add the cheese', text: 'Just before they set, fold in the grated cheese and take the pan off the heat.' },
    ],
  },
];

export const getRecipe = (id) => recipes.find((r) => r.id === id);

// Most matching ingredients first; ties keep the original order (Array#sort is stable).
export const sortByMatches = (list, selected) => {
  const set = new Set(selected);
  const score = (r) => r.ingredients.filter((i) => set.has(i)).length;
  return [...list].sort((a, b) => score(b) - score(a));
};
