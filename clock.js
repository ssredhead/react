import React from 'react';
import ReactDOM from 'react-dom';

//Lifecycle of a component:
//Mounting - initialization
//Updating - updated (state/prop change)
//Unmount - removal from DOM

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  
  startInterval() {
    //chose delay by toggle
    let delay;
    if (this.props.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  
  //final method called during the mounted phase AKA start timer after render
  //when a component produces a side-effect, you should remember to clean it up
  //componentDidMount is a behind the scenes function like constructor that you can build outside of the default. It is called after render.
  componentDidMount() {
    this.startInterval();
  }
  
  componentDidUpdate(prevProps) {
    //If precise hasn't changed, stop and return.
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }

    //clear the existing interval like in componentWillUnmount().
    clearInterval(this.intervalID);

    //start new interval. Determine intermal by precision toggle.
    this.startInterval();
  }

	//use dot notation to clear interval (setInterval and clearInterval are JS functions)
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));