import { shallowMount } from '@vue/test-utils'
import SearchFilter from '@/components/SearchFilter';

describe('SearchFilter', () => {
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

  // it('renders SearchFilter component', () => {
  //   expect(wrapper.find(SearchFilter)).toHaveLength(1);
  // })

  // it('renders Pagination component', () => {
  //   expect(wrapper.find(Pagination)).toHaveLength(1);
  // })

  // it('renders 4 table rows as people count is 4', () => {
  //   const wrapper = shallowMount(People, {
  //     data: {
  //       people: [1, 2, 3, 4]
  //     }
  //   })
  //   expect(wrapper.findAll('.tr').length).toEqual(4)
  // })
})
