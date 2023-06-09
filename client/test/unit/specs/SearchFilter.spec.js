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
    expect(wrapper.contains('.filter-dropdown')).toBe(true);
  });

  it('has a filter button', () => {
    expect(wrapper.contains('.filter-btn')).toBe(true);
  });

  it('emits onChange event when Filter button is clicked', async() => {
    try {
      await wrapper.setData({
        searchText: 'Dan',
        filter: 'name'
      })
    } catch (e) {
      const filterBtn = wrapper.find('.filter-btn');
    filter-btn.trigger('click');
    expect(wrapper.emitted().onChange.length).toBe(1);
    }
  })
})
