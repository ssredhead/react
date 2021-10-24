import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    //prevents page refresh
    event.preventDefault();
    if (text.length > 0) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
      //clear input field
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
