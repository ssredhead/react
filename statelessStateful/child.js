import React from 'react';

//How does a stateless child component update the state of a parent component?
//1) The parent component class defines a method that calls this.setState()
//2) the parent component binds the newly-defined method to the current instance of the component in its constructor. When we pass the method to the child component, it will still update the parent.
//3) Once the parent has defined the method updating its state and binds it, the parent then psses that method down to the child.
//4) The child receives the function and uses it as an event handler.

export class Child extends React.Component {

  constructor(props) {
    super(props);
    
    //remember to bind this
    this.handleChange = this.handleChange.bind(this);
  }

  //as opposed to using an onChange tag, which won't work, make a receptive event-handler function to break down the event object being sent.
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
	return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}