import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../server/public/styles.css';
const container = document.getElementById('root');
const root = createRoot(container);

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
      type="checkbox"
      value={checked}
      onChange={() => setChecked(checked => !checked)}
      />
      <p>{checked ? 'checked' : 'not checked'}</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
