import React from 'react';
import { shallow } from 'enzyme';
import { StatesContainer } from './StatesContainer';

describe('StatesContainer', () => {

  it('should match snapShot', () => {
    const mockStatesList = [
      {
        "name": "Alabama",
        "abbreviation": "AL"
      },
      {
        "name": "Alaska",
        "abbreviation": "AK"
      }
    ]
    const wrapper = shallow(
      <StatesContainer statesList={mockStatesList} />);
    expect(wrapper).toMatchSnapshot()
  });
});