import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

//lists need keys if:
//1) List-itemns have memory from one render to the next (like checkboxes)
//2)A list's oder might be shuffled (like searching)
//use array mapping in tandom with jsx (especially for lists)
const peopleLis = people.map((person, i) =>
  //add i to map to generate unique key id
  <li key={'person_' + i}>{person}</li>
);

ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));