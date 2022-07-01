import React from 'react';
import Checkbox from './checkbox';
import ShowStarRating from './star-rating';
// import UseEffect from './useEffect1';
import UseEffectArray from './useEffect2';
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
  </React.StrictMode>
);
