import React from 'react';
import { shallow } from 'enzyme';
import { StateReps } from './StateReps';

describe('StateReps', () => {


  it('should match snapShot', () => {
    const wrapper = shallow(
      <StateReps />);
    expect(wrapper).toMatchSnapshot()
  });
});