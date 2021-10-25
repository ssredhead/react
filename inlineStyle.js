import React from 'react';
import ReactDOM from 'react-dom';
const styles = {
  background: 'lightblue',
  color: 'darkred'
  // camelCase
  //string px is inferred
  marginTop: 100,
  fontSize: 50
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);