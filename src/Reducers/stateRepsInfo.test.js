import { stateRepsInfo } from './stateRepsInfo';

describe('stateRepsInfo', () => {
  it('should return the initial state', () => {
    const expectedState = {};

    const result = stateRepsInfo(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return stateRepsInfo', () => {
    const mockRepInfo =
      {
        "id": "AKL000016",
        "leg_id": "AKL000016",
        "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
        "full_name": "Bert Stedman",
        "first_name": "Bert",
        "last_name": "Stedman",
        "suffix": "",
        "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
      };
    const mockAction = {
      type: 'SET_REP_INFO',
      reps: mockRepInfo
    }
    const expectedState = mockRepInfo;

    const result = stateRepsInfo({}, mockAction);

    expect(result).toEqual(expectedState);
  });
});