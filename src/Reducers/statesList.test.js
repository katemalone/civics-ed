import { statesList } from './statesList';

describe('statesList', () => {
  it('should return the initial state', () => {
    const expectedState = [];

    const result = statesList(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return statesList', () => {
    const mockStateList = [
      {
        "name": "Alabama",
        "abbreviation": "AL"
      },
      {
        "name": "Alaska",
        "abbreviation": "AK"
      }];
    const mockAction = {
      type: 'ADD_STATE_LIST',
      states: mockStateList
    }
    const expectedState = mockStateList;

    const result = statesList([], mockAction);

    expect(result).toEqual(expectedState);
  });
});