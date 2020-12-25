import { authReducer, initialState } from './device.reducer';

describe('Device Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
