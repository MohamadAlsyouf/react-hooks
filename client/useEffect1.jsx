import React, { useState, useEffect } from 'react';
import '../server/public/styles.css';

function UseEffect() {
  const [name, setName] = useState('Mo');

  // By default runs after each render and every update
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Ali')}>
        Change Winner
      </button>
    </section>
  );
}

export default UseEffect;
