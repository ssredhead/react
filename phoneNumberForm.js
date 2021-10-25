import ReactDOM from "react-dom";
import React, { useState } from "react";

function PhoneNumberForm() {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    const newNumber = e.target.value;

    if (!Number.isNaN(Number(newNumber)) && newNumber.length <= 10) {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sending confirmation code to ${number}.`);
  };


//here you control the input by giving it the value of number
//Control the input by putting onChange validation on it. Not necessary
//when you just want to validate afterward.

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="tel" value={number} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

const app = document.getElementById('app');

ReactDOM.render(
  <PhoneNumberForm />,
  app
);