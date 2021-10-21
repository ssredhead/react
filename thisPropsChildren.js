import React from 'react';
import { LilButton } from './LilButton';

class BigButton extends React.Component {
  render() {
	  //this.props.children returns whatever is between the opening and closing class component tags (since they don't need to be self-closing)
    console.log(this.props.children);
    return <button>Yo I am big</button>;
  }
}


// Example 1
// this.props.children = "I am a child of Big Button"
<BigButton>
  I am a child of BigButton.
</BigButton>


// Example 2
// this.props.children = whatever LilButton renders
<BigButton>
  <LilButton />
</BigButton>


// Example 3
// this.props.children = undefined, since it is self-closing
<BigButton />