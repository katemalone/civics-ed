import * as actions from '../actions';

describe('addStatesList action', () => {

it('should have a type of ADD_STATE_LIST', () => {
    const states = [
      {
        "name": "Alabama",
        "abbreviation": "AL"
      },
      {
        "name": "Alaska",
        "abbreviation": "AK"
      },
      {
        "name": "Arizona",
        "abbreviation": "AZ"
      },
      {
        "name": "Arkansas",
        "abbreviation": "AR"
      },
      {
        "name": "California",
        "abbreviation": "CA"
      },
      {
        "name": "Colorado",
        "abbreviation": "CO"
      }
    ]
    const expected = {
      type: 'ADD_STATE_LIST',
      states
    }

    const result = actions.addStatesList(states)
    expect(result).toEqual(expected)

  })
})