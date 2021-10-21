import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps for a class component allow you to define a default prop value if there is nothing exists in that prop value. It will be overriden with any porp given on render
Button.defaultProps = { text: 'I am a button'};

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);