import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const images = []
const title = '';
const background = <img className='backgroud' src='/images/ocean.jpg' alt='ocean' />

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal]
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];

  document.getElementById('fact').innerHTML = funFact;
}

for (const animal in animals) {
  images.push(<img key={animal} className='animal' src={animals[animal].image} aria-label={animal} role='button' alt={animal} onClick={displayFact}/>);
}

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal' : title}</h1>
    {background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
  );

ReactDOM.render(animalFacts, document.getElementById('root'));