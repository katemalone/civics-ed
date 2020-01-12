import * as actions from '../actions';

describe('isLoading actions', () => {

it('should have a type of IS_LOADING if it is true', () => {
  const bool = true
  const expected = {
    type: 'IS_LOADING',
    bool
  }
  const result = actions.isLoading(bool);
  expect(result).toEqual(expected)
  })

  it('should have a type of IS_LOADING if it is false', () => {
    const bool = false
    const expected = {
      type: 'IS_LOADING',
      bool
    }
    const result = actions.isLoading(bool);
    expect(result).toEqual(expected)
  })
})