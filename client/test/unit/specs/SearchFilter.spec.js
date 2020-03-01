import { shallowMount } from '@vue/test-utils';
import SearchFilter from '@/components/SearchFilter';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(SearchFilter);
});

afterEach(() => {
  wrapper.destroy();
});

describe('SearchFilter', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('sets the correct default data', () => {
    let data = {
      searchText: '',
      filter: '',
      filterOptions: [
        { value: '', text: 'Select an option' },
        { value: 'name', text: 'Name' },
        { value: 'location', text: 'Location' },
        { value: 'email', text: 'Email' },
        { value: 'status', text: 'Status' }
      ]
    };
    expect(typeof SearchFilter.data).toBe('function');

    const defaultData = SearchFilter.data();
    expect(defaultData).toEqual(data);
  })

  it('has a search component', () => {
    expect(wrapper.contains('.search')).toBe(true);
  });

  it('has a filter dropdown', () => {
    expect(wrapper.contains('.filterDropdown')).toBe(true);
  });

  it('has a filter button', () => {
    expect(wrapper.contains('.filterBtn')).toBe(true);
  });

  it('emits onChange event when Filter button is clicked', () => {
    wrapper.vm.$nextTick().then(() => {
      const filterBtn = wrapper.find('.filterBtn');
      filterBtn.trigger('click');
      expect(wrapper.emitted().onChange.length).toBe(1);
    })
  })
})
