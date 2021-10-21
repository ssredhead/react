import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      //The attribute name onClick creates an event listener:
      //Becasue <button> is lowercase and therefore an HTML element
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}