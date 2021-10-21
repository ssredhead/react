import React from 'react';
import ReactDOM from 'react-dom';

//Make a component display passed-in information:
//1) Find the component class receiving that information.
//2)Include this.props.info-name in the render method's return statement.
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Greta' />, 
  document.getElementById('app')
);