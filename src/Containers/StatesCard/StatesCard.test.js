import React from 'react';
import { shallow } from 'enzyme';
import { StatesCard } from './StatesCard';

describe('StatesCard', () => {


  it('should match snapShot', () => {
    const wrapper = shallow(
      <StatesCard />);
    expect(wrapper).toMatchSnapshot()
  });
});