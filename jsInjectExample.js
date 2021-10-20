import React from 'react';
import ReactDOM from 'react-dom';

// Displays 2 + 3 = 5 via js inject:
const math = <h1>2 + 3 = {2 + 3}</h1>

ReactDOM.render(math, document.getElementById('app'));