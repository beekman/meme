import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Display from './Display';
export default class Meme extends Component {
  state = {
    text: 'TextSelector',
    headerText: 'Not sure if custom hooks are worth mastering',
    image: 'https://imgflip.com/s/meme/Futurama-Fry.jpg',
    footerText: 'or just newfangled flash in the pan'
  };


  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { headerText, image, footerText } = this.state;
    return (
      <>
        <TextSelector
          headerText={ headerText }
          image={ image }
          footerText={ footerText }
          onChange={ this.handleChange } />
        <Display headerText={ headerText }
          image={ image }
          footerText={ footerText }
          onChange={ this.handleChange } />
      </>
    );
  }
}
