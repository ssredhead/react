import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

//class starts with capital and extends React.Component
class Owl extends React.Component {
	//class must contain render function
  render() {
	  //render must contain return statement
    return (
      <div>
	  <-- inject javascript directly by using curly braces !-->
        <h1>{owl.title}</h1>
        <img 
        src={owl.src}
        alt={owl.title}
        />
      </div>
    );
  }
}

ReactDOM.render(<Owl />, document.getElementById('app'));