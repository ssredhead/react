import React from 'react';
import ReactDOM from 'react-dom';

//function components are react components written as JavaScript functions
//They must return JSX
//They typically use props parameters (a JS object)

//function component rewritten from typical class and render function. Just remove render outer function and rewrite class declaration
export const Friend = () => {
    return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);