// Central asset map: swap any path here to replace a placeholder app-wide.
const base = '/assets';

export const ASSETS = {
  logo: `${base}/logo/logo-chefnt.png`,
  ui: {
    fridge: `${base}/ui/fridge.png`,
    arrowBack: `${base}/ui/arrow-back.png`,
    plus: `${base}/ui/icon-plus.png`,
    minus: `${base}/ui/icon-minus.png`,
    difficulty: `${base}/ui/icon-difficulty.png`,
    timer: `${base}/ui/icon-timer.png`,
  },
  loading: {
    cuttingBoard: `${base}/loading/cutting-board.png`,
    pan: `${base}/loading/pan.png`,
    mixer: `${base}/loading/mixer.png`,
  },
  ingredients: {
    egg: `${base}/ingredients/egg.png`,
    garlic: `${base}/ingredients/garlic.png`,
    cheese: `${base}/ingredients/cheese.png`,
    chili: `${base}/ingredients/chili.png`,
  },
  recipes: {
    omelette: `${base}/recipes/omelette.png`,
    friedEgg: `${base}/recipes/fried-egg.png`,
    // PLACEHOLDER: no real photo yet for scrambled eggs.
    scrambledEggs: `${base}/recipes/placeholder.svg`,
  },
};
