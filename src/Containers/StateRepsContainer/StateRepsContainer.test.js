import React from 'react';
import { shallow } from 'enzyme';
import { StateRepsContainer } from './StateRepsContainer';

describe('StateRepsContainer', () => {

  let mockRepInfo =
    [{
      "id": "AKL000016",
      "leg_id": "AKL000016",
      "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
      "full_name": "Bert Stedman",
      "first_name": "Bert",
      "last_name": "Stedman",
      "suffix": "",
      "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
    }];


  it('should match snapShot', () => {
    const wrapper = shallow(
      <StateRepsContainer stateRepsInfo={mockRepInfo} />);
    expect(wrapper).toMatchSnapshot()
  });
});