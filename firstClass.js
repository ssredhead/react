import React from 'react';
import ReactDOM from 'react-dom';

//Import both because react does not interact inherently with the DOM.
//DOM exists outside of react.

//You can use JavaScript classes to define new React components.
//A component is a reusable chunck of code responsible for a job, often involving rendering HTML.
//After defining a class component, it can be used to render as many instances of the component as necessary.

//React.Component is a JavaScript class. To use it, subclass it (<exClass> extends React.Component {})
//A class is equivalent to a factory that can build as many react components as necessary.

//class names MUST begin with a capital letter and should follow camel case after because JSX destinguishes html from react through capitalization
class MyComponentClass extends React.Component {
//The only property required from a class is a render function.
  render() {
	//A render function must include a return statement.
    return <h1>Hello world</h1>;
  }
}

//When you render a class component, it inherits the functions of the class, (render). To call render, use the normal ReactDOM.render function
ReactDOM.render(
	//Use the single tag <ComponentClassName /> to generate an instance of the component class 
	<MyComponentClass />, 
	document.getElementById('app')
);
