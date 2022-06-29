import React, { useState } from 'react';
import '../server/public/styles.css';

function Checkbox() {
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

export default Checkbox;
