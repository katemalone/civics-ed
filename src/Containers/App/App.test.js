import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
let wrapper;
let mockProps;

  beforeEach(() => {
    wrapper = shallow(<App />);
    mockProps= {
      
    }
  }) 

  it('should match Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})