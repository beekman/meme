import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders TextSelector', () => {
    const wrapper = shallow(<TextSelector headerText="Hello" image="https://imgflip.com/s/meme/Futurama-Fry.jpg" footerText="Goodbye" />);
    expect(wrapper).toMatchSnapshot();
  });
});
