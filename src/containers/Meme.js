import React, { Component } from 'react';
import TextSelector from '../components/TextSelector/TextSelector';
import Display from '../components/Display/Display';
export default class Meme extends Component {
  state = {
    text: 'TextSelector',
    headerText: 'Not sure if custom hooks solve problems',
    image: 'https://imgflip.com/s/meme/Futurama-Fry.jpg',
    footerText: 'or if they just create new problems'
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
