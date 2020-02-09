import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Display headerText="Fry Day" footerText="Friday" image="https://imgflip.com/s/meme/Futurama-Fry.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
