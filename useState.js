// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';

//useState() comes from the React library. It returns an array with two values:
//1) Current state - current value of state
//2) State setter - a function to update the value of the state

//you can reame these two values on import with this form: const [toggle, setToggle] = useState();

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  //fill in the function to set the initial state in the first render. 
  //This will be overriden when the state setter is called, and when a component re-renders, the previous state is used, not the initial.
  const [color, setColor] = useState("Tomato");

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}
