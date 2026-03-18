# Paradise Nursery Shopping App

Paradise Nursery is a React shopping experience for browsing houseplants and managing a cart.

## Tech Stack

- React 19
- React Router
- Redux Toolkit + React Redux
- Vite

## Pages

- Landing page with company branding, background image, About Us text, and Get Started call to action
- Product listing page with categorized houseplants and Add to Cart controls
- Shopping cart page with quantity controls, remove actions, total item count, and total price

## Features

- Dynamic cart icon count in the shared header
- Add to cart and disable Add button for existing products
- Increase/decrease quantity from the cart page
- Remove individual products from the cart
- Checkout action with a Coming Soon message
- Continue shopping navigation back to the product listing page

## Project Structure

```text
src/
  components/
    AboutUs.jsx
    Header.jsx
    PlantCard.jsx
  data/
    plants.js
  pages/
    LandingPage.jsx
    ProductList.jsx
    CartItem.jsx
  store/
    CartSlice.jsx
    store.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Scripts

- `npm run dev` starts development server
- `npm run build` builds production assets
- `npm run preview` previews production build

## Grading File Map

- Task 2: `src/components/AboutUs.jsx`
- Task 3: `src/App.css`
- Task 4: `src/App.jsx`
- Task 5: `src/store/CartSlice.jsx`
- Task 6: `src/pages/ProductList.jsx`
- Task 7: `src/pages/CartItem.jsx`
