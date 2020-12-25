import * as DeviceActions from './device.actions';

describe('Device', () => {
  it('should create an instance', () => {
    expect(new DeviceActions.LoadDevices()).toBeTruthy();
  });
});
