import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

//presentational component (only JSX/HTML)
//this means only the render function. 
//remember to export it!

export class CopyCat extends React.Component {
  render() {
    //now come from container class as props
    const {copying, toggleTape, input, handleChange, name} = this.props;
    
    return (
      <div style={divStyles}>
        <h1 style={marginBottom: 80}>Copy Cat {name || 'Tom' }</h1>
        <input 
        type='text' 
        value={input} 
        onChange={handleChange}
        />
        <img 
          style={imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        
        <p>{ copying && value }</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
};
