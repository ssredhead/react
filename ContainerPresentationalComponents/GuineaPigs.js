import React from 'react';

//this component does too much. 
//Separate out the functional aspects of the component (state, calculations, logic) 
//from the html rendering and into a container component.

//This component is now the presentational component.

export class GuineaPigs extends React.Component {
  render() {
    let src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
}