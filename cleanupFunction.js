import React, { useState, useEffect } from 'react';

//When adding event listeners to the DOM, you have to remove those event listeners when done to avoid memory leaks. Hence, cleanup functions.

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  const increment = () => setClickCount((prev) => prev + 1);

    useEffect(() => {
    document.addEventListener('mousedown', increment);
    //cleanup function
    return () => {
      document.removeEventListener('mousedown', increment);
    };
  });

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

