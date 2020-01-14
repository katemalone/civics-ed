import React from 'react';
import { shallow } from 'enzyme';
import { App, mapDispatchToProps } from './App';
import { addStatesList } from '../../Actions'

describe('App', () => {
    
  
  it('should match snapShot', () => {
    const wrapper = shallow(
    <App addStatesList={jest.fn()} />);
      expect(wrapper).toMatchSnapshot()
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
        }]);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addStatesList([
        {
          "name": "Alabama",
          "abbreviation": "AL"
        },
        {
          "name": "Alaska",
          "abbreviation": "AK"
        }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
 
})