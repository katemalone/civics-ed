import { currentState } from './currentState';

describe('currentState', () => {
  it('should return the initial state', () => {
    const expectedState = {};

    const result = currentState(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return currentState', () => {
    const mockStatesInfo = {
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
    };
    const mockAction = {
      type: 'ADD_STATE_INFO',
      statesInfo: mockStatesInfo
    }
    const expectedState = mockStatesInfo;

    const result = currentState({}, mockAction);

    expect(result).toEqual(expectedState);
  });
});