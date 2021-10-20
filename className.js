import React from 'react';
import ReactDOM from 'react-dom';

// use 'className' instead of 'class' because,
// when rendered in javascript, class is reserved.

const myDiv = <div className="big">I AM A BIG DIV</div>

ReactDOM.render(myDiv, document.getElementById('app'));
