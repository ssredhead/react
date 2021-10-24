import React, { useState, useEffect } from 'react';

//The effect hook lets you control when an effect is updates/re-rendered. Do this by passing an empty array to useEffect() as a second argument called a 'dependency array'.

//The dependency array tells useEffect() when to call the effect and when to skip it. It is always called after the first render, but then only when determined.

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
    //dependency array
  }, []);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );
}


