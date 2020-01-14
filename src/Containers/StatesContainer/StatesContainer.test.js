import React from 'react';
import { shallow } from 'enzyme';
import { StatesContainer, mapDispatchToProps } from './StatesContainer';
import { addStatesList } from '../../Actions';

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

describe('mapDispatchToProps', () => {
  it('calls dispatch with addStatesList when addStatesList is called', () => {

    const mockDispatch = jest.fn();
    const actionToDispatch = addStatesList([
      {
        "name": "Alabama",
        "abbreviation": "AL"
      },
      {
        "name": "Alaska",
        "abbreviation": "AK"
      }
    ]);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addStatesList([
      {
        "name": "Alabama",
        "abbreviation": "AL"
      },
      {
        "name": "Alaska",
        "abbreviation": "AK"
      }
    ]);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});