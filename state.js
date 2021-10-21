import React from 'react';
import ReactDOM from 'react-dom';

//A react component can access dynamic information through props and state.
//A component's state is not passed in from the outside. A component decides its own state.

class App extends React.Component {
//A component's state should be declared inside of the class's constructor.
//A state is assigned an object.
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));