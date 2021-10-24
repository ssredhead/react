import React, { useState } from 'react';

//Often, the next state value is calculated using the current state. It is best practice to update state with a callback function and not risk capturing oudated, "stale" state values.

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers as arrow function.

  // calculates the previous question index using the setState function.
 const goBack = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);

 const goToNext = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);

  // determine if on the first question or not 
  const onFirstQuestion = questionIndex === 0;

  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled={onFirstQuestion} onClick={goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}
