import React from 'react';
import ReactDOM from 'react-dom';

//You don't need to use 'this', instead use props parameter
export function NewFriend (props) {
		return (
      <div>
        <img src={props.src} />
      </div>
    );
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

