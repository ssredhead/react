import React from 'react';
import ReactDOM from 'react-dom';

// JavaScript withing JSX within JavaScript:
// Displays 2 + 3 because of tags
ReactDOM.render(<h1>2 + 3</h1>, document.getElementById('app'));


// This is just an example. Multiple render statements mean the second render doesn't do anything
// Curly braces turn a statement back into js:
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('app'));