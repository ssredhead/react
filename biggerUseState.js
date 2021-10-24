import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  //addThought function copies old thoughts array and creates a new one with the new thought at the front, using setThoughts.
  const addThought = (thought) => {
    setThoughts((thought) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) => thoughts.filter((thought) => thought.id !== thoughtIdToRemove));
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
