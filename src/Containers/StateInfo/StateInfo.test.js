import React from 'react';
import { shallow } from 'enzyme';
import { StateInfo, mapStateToProps, mapDispatchToProps } from './StateInfo';
import { getStateReps } from '../../utils/apiCalls';
import { setRepInfo, isLoading, hasErrored } from '../../Actions'

jest.mock('../../utils/apiCalls.js');

describe('StateInfo', () => {
 let wrapper;
 let mockRepsInfo;

  beforeEach(() => {

    mockRepsInfo =
    [{
      "id": "AKL000016",
      "leg_id": "AKL000016",
      "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
      "full_name": "Bert Stedman",
      "first_name": "Bert",
      "last_name": "Stedman",
      "suffix": "",
      "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
    }]

    wrapper = shallow(
      <StateInfo
        setRepInfo={jest.fn()}
      />
    )



  it('should render with correct data', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should change state when handleClick is called', () => {

    wrapper.setState({ isClicked: false })

    wrapper.instance().handleClick()

    expect(wrapper.state('isClicked')).toEqual(true)
  })

    it('should call getStateReps when handleClick is invoked', async () => {
      const mockAbbrv = 'co'
      getStateReps.mockImplementation(() => {
        return Promise.resolve(mockRepsInfo);
      });
   
      await wrapper.instance().handleClick(mockEvent);

      expect(mockGetRepInfo).toHaveBeenCalledWith(mockAbbrv)
    })
  })
})

  describe('mapStateToProps', () => {
    it('should return the currentState data from state', () => {

      const mockState = {
        currentState: [
          {
            "id": "al",
            "name": "Alabama",
            "abbreviation": "al",
            "legislature_name": "Alabama Legislature",
            "legislature_url": "http://www.legislature.state.al.us/",
            "chambers": {},
            "latest_update": "2020-01-10 12:03:05",
            "capitol_timezone": "America/Chicago",
            "terms": [{}, {}],
            "feature_flags": [],
            "latest_csv_date": "2018-11-03 00:00:00",
            "latest_csv_url": "https://data.openstates.org/legacy/csv/al.zip",
            "latest_json_date": "2018-11-03 00:00:00",
            "latest_json_url": "https://data.openstates.org/legacy/json/al.zip"
          }
        ]
      };

      const expected = {
        currentState: [
          {
            "id": "al",
            "name": "Alabama",
            "abbreviation": "al",
            "legislature_name": "Alabama Legislature",
            "legislature_url": "http://www.legislature.state.al.us/",
            "chambers": {},
            "latest_update": "2020-01-10 12:03:05",
            "capitol_timezone": "America/Chicago",
            "terms": [{}, {}],
            "feature_flags": [],
            "latest_csv_date": "2018-11-03 00:00:00",
            "latest_csv_url": "https://data.openstates.org/legacy/csv/al.zip",
            "latest_json_date": "2018-11-03 00:00:00",
            "latest_json_url": "https://data.openstates.org/legacy/json/al.zip"
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });

    it('should return the stateRepsInfo data from state', () => {

      const mockState = {
        stateRepsInfo: 
          {
            "id": "AKL000016",
            "leg_id": "AKL000016",
            "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
            "full_name": "Bert Stedman",
            "first_name": "Bert",
            "last_name": "Stedman",
            "suffix": "",
            "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
          }
      };

      const expected = {
        stateRepsInfo: {
          "id": "AKL000016",
          "leg_id": "AKL000016",
          "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
          "full_name": "Bert Stedman",
          "first_name": "Bert",
          "last_name": "Stedman",
          "suffix": "",
          "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
        }
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

describe('mapDispatchToProps', () => {
  it('calls dispatch with setRepInfo when setRepInfo is called', () => {

    const mockDispatch = jest.fn();
    const actionToDispatch = setRepInfo({
      "id": "AKL000016",
      "leg_id": "AKL000016",
      "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
      "full_name": "Bert Stedman",
      "first_name": "Bert",
      "last_name": "Stedman",
      "suffix": "",
      "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setRepInfo({
      "id": "AKL000016",
      "leg_id": "AKL000016",
      "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
      "full_name": "Bert Stedman",
      "first_name": "Bert",
      "last_name": "Stedman",
      "suffix": "",
      "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
