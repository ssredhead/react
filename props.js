import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

//specifying the props in the class component instance makes the fields render as JSON where {strinProps} is called
ReactDOM.render(<PropsDisplayer myProp="Hello" name="Frarthur" town="Flundon" age={2} haunted={false} />, document.getElementById('app'));
