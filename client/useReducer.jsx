import React, { useReducer } from 'react';
import '../server/public/styles.css';

function UseReducer() {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return (
    // adds 1 to previous number, the result gets updated as current state.
    <h1 onClick={() => setNumber(1)}>{number}</h1>
  );
}

export default UseReducer;
