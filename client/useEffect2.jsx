import React, { useState, useEffect } from 'react';
import '../server/public/styles.css';

function UseEffectArray() {
  const [name, setName] = useState('Mo');
  const [admin, setAdmin] = useState(false);

  // By default runs after each render and every update.
  // with dependancy array - [] - as second param, useEffect will only fire once - on first render.
  // helps to be more specific on which effect we want triggered, so we don't run unnecessary code.

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]); // call this one anytime the name changes

  useEffect(() => {
    console.log(`The user is: ${admin ? 'admin' : ' not admin'}`);
  }, [admin]); // call this one anytime the admin changes

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Ali')}>
        Change Winner
      </button>

      <p>{admin ? 'logged in' : 'not logged in'} </p>
      <button onClick={() => setAdmin(true)}>
        Log in
      </button>
    </section>
  );
}

export default UseEffectArray;
