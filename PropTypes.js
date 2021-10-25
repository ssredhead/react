import React from 'react';
import PropTypes from 'prop-types';

//propTypes are good for validation and documentation

//1)Import PropTypes
//2)Declare propTypes as a static property on the component after component definition.
//the value of propTypes is an object, not a function.
//3)Add properties to the propTypes object. 1-1 prop to propTypes

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: PropTypes.string
};