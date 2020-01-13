import { errorMsg } from './errorMsg';

describe('errorMsg', () => {
  it('should return the initial state', () => {
    const expectedState = '';

    const result = errorMsg(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should return a message', () => {
    const message = 'can not get info';
    const mockAction = {
      type: 'HAS_ERRORED',
      message
    }
    const expectedState = message;

    const result = errorMsg(undefined, mockAction);

    expect(result).toEqual(expectedState);
  });
});