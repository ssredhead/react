import React, { useState, useEffect } from 'react';

//the useEffect function is used to call another function that does something for us so there is nothing returned from the useEffect() function.

//It's first argument is the callback function that you want React to call after each time this component renders, known as the 'effect'

//The effect is called after the component renders, but we still have access to the variables in the scope of the function component. It renders the DOM and then updates the effect each time, including the first and last.

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count: ${count}`);
  });

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
