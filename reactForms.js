import React from 'react';
import ReactDOM from 'react-dom';


//An uncontrolled component is a component that maintains its own interal state.
//It has its own memory, such as an input tag that tracks the value.

//A controlled component is one that does not. It must be controlled elsewhere.
//Like most component types.

export class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInput: '' };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({ userInput: e.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} />
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);