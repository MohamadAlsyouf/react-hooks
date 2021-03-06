import React from 'react';
import Checkbox from './checkbox';
import ShowStarRating from './star-rating';
// import UseEffect from './useEffect1';
import UseEffectArray from './useEffect2';
// import UseEffectFetch from './useEffect3';
import UseReducer from './useReducer';
import { createRoot } from 'react-dom/client';
import '../server/public/styles.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Checkbox />
    <ShowStarRating />
    {/* <UseEffect /> */}
    <UseEffectArray />
    {/* <UseEffectFetch /> */}
    <UseReducer />
  </React.StrictMode>
);
