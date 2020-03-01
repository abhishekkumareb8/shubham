import { shallowMount } from '@vue/test-utils';
import User from '@/components/User';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(User, {
    propsData: {
      person: {
        name: 'Joe Hunter',
        location: '205 College St',
        email: 'joe.hunter@example.com',
        status: 'Discarded',
        picture: 'https://randomuser.me/api/portraits/men/9.jpg',
        contact: '(526)-534-5309'
      }
    }
  });
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
      dateofbirth: ''
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
