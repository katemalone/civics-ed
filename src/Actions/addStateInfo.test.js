import * as actions from '../actions';

describe('addStateInfo action', () => {

  it('should have a type of ADD_STATE_INFO', () => {
    const statesInfo = {
    "id": "al",
    "name": "Alabama",
    "abbreviation": "al",
    "legislature_name": "Alabama Legislature",
    "legislature_url": "http://www.legislature.state.al.us/",
    "chambers": {},
    "latest_update": "2020-01-10 12:03:05",
    "capitol_timezone": "America/Chicago",
    "terms": [{ }, { }],
    "feature_flags": [],
    "latest_csv_date": "2018-11-03 00:00:00",
    "latest_csv_url": "https://data.openstates.org/legacy/csv/al.zip",
    "latest_json_date": "2018-11-03 00:00:00",
    "latest_json_url": "https://data.openstates.org/legacy/json/al.zip"
    }

    const expected = {
      type: 'ADD_STATE_INFO',
      statesInfo
    }

    const result = actions.addStateInfo(statesInfo)
    expect(result).toEqual(expected)

  })
})