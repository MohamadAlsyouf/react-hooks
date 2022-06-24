import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../server/public/styles.css';
const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const [
    status,
    setStatus
  ] = useState('Not Delivered');

  return (
    <div>
      <h1>The package is: {status} </h1>
      <button onClick={() => setStatus('Delivered')}>Deliver</button>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
