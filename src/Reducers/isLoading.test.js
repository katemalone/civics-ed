import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expectedState = false;

    const result = isLoading(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return a bool', () => {
    const bool = false;
    const mockAction = {
      type: 'IS_LOADING',
      bool
    }

    const result = isLoading(undefined, mockAction);

    expect(result).toEqual(bool);
  });
});