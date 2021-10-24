import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  //chooseVideo expects a string, but event handlers automatically pass event objects, so you can't just attach 'onClick={this.props.chooseVideo}', you need to wrap chooseVideo in a new function to process the argument.
  handleClick(e) {
    let text = e.target.value;
    //now text is a string, and you can send it through the event handler correctly.
    this.props.chooseVideo(text);
  }
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}