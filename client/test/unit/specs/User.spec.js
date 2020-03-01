import { shallowMount } from '@vue/test-utils';
import User from '@/components/User';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(User);
});

afterEach(() => {
  wrapper.destroy();
});

describe('User', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('sets the correct default data', () => {
    let data = {
      active: false,
      person: {}
    };
    expect(typeof User.data).toBe('function');

    const defaultData = User.data();
    expect(defaultData).toEqual(data);
  })

  it('has a user detail component', () => {
    expect(wrapper.contains('.userDetail')).toBe(true);
  });

  it('has a user profile picture component', () => {
    expect(wrapper.contains('.profilePic')).toBe(true);
  });
})