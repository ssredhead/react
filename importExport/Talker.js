import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
//How to name a prop and event handler
//1) Think about what type of event you are listening for (like "click" or "enter").
// If it is a click event, you might call it handleClick()
//2) The prop name should be the word 'on' + the event type, so "onClick" or "onKeyUp"
class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    //this attribute name onClick is just a normal attribute name:
    //because <Button/> is a react class name, not an HTML element.
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);