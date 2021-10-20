import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Using variables as fillers for tag attributes:
const gooseImg = <img src={goose} />

ReactDOM.render(gooseImg, document.getElementById('app'));