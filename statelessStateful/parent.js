import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './child';
import { Sibling } from './sibling';

//A component should not update its props
//Props should only be change by a different component
//A component should use state to store information that the component itself can change

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    //remember to bind this.changeName to the current value of this
    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
		<div>
			<Child
			  onChange={this.changeName} />
			<Sibling name={this.state.name} />
		</div>
	);
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);