import React from 'react';
import ReactDOM from 'react-dom';

const myList = (
  <ul>
    <li>Shark</li>
    <li>Liz</li>
    <li>Mitch</li>
  </ul>
);

// first argument is what is being rendered
// second argument is where it is being displayed (which html element)
ReactDOM.render(myList, document.getElementById('app'));