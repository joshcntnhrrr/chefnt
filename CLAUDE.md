# Chef'nt

Mobile-first web app: pick the ingredients in your fridge, get matching recipes.

## Stack
Vite + React 18 + React Router 6 + plain CSS (custom properties). No TypeScript, no UI libraries.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Structure
- `design/` — 7 reference screens (visual source of truth)
- `public/assets/` — PNG assets (logo, ui, ingredients, loading, recipes)
- `src/data/assets.js` — central asset paths; swap placeholders here
- `src/data/` — `recipes.js` (mock recipes + `sortByMatches`), `ingredients.js`
- `src/context/SelectionContext.jsx` — selected ingredients (React Context)
- `src/components/` — Header, BackButton, RecipeCard, IngredientItem
- `src/pages/` — one file per route
- `src/styles/` — `tokens.css` (design tokens), `app.css` (all styles, grouped by screen)

## Routes
`/` splash (2s) → `/home` (tap fridge) → `/ingredients` (+/−, continue) → `/searching` (2.5s) → `/recipes` (carousel, sorted by matches) → `/recipe/:id`

## Design system
- Bg `#071010`, text `#C5E3E6`, accent `#E5C93D` (tokens in `src/styles/tokens.css`)
- Poppins 300/400/500, centered light titles
- Recipe images radius 40px; 3D PNG icons
- Container max-width 430px, centered on desktop
- All animations respect `prefers-reduced-motion`
