import React from 'react';
import ReactDOM from 'react-dom';

//this.setState() takes and object and merges that object with the component's current state.
//If the component has props that aren't in the object, those props are unchanged.
//anytime this.setState() is called, it automatically re-renders the component.

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    //Because of the way event handler's are bound in JS, this.toggleMood loses it's 'this' when used later in the file. Therefore, the expressions 'this.state.mood' and 'this.setState' won't work unless you re-bind the correct 'this' to 'this.toggleMood'

    //whenever you make an event handler that uses 'this' you have to include the line 'this.methodName = this.methodName.bind(this)'
    this.toggleMood = this.toggleMood.bind(this);
  }

//a wrapper function is the most common way of calling this.setState, like this.
  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }
 //You cannot call this.setState() inside of render.
  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));