import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../server/public/styles.css';
import { FaStar } from 'react-icons/fa';

const container = document.getElementById('root');
const root = createRoot(container);

// helper function to create an array of stars
const createArray = length => [
  ...Array(length)
];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? 'red' : 'gray'}
  onClick={onSelect}/>;
}

function StarRating({ totalStars = 5 }) {
  const [
    selectedStars,
    setSelectedStars
  ] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
    <p>{selectedStars} of {totalStars}</p>
    </>
  );
}

function App() {
  return <StarRating totalStars={5}/>;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
