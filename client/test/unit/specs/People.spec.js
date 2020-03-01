import { shallowMount } from '@vue/test-utils'
import People from '@/components/People';
import SearchFilter from '@/components/SearchFilter';
import Pagination from '@/components/Pagination';

const wrapper = shallowMount(People);

describe('People', () => {
  it('has a mounted() hook', () => {
    expect(typeof People.mounted).toBe('function');
  })

  it('sets the correct default data', () => {
    let data = {
      people: [],
      total: 0,
      page: 0,
      per_page: 0,
      totalPage: 0,
      person: {},
      order: 'desc',
      sortBy: '',
      filterParams: {}
    };
    expect(typeof People.data).toBe('function');

    const defaultData = People.data();
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
