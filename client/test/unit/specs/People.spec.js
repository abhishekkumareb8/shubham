import { shallowMount } from '@vue/test-utils'
import People from '@/components/People';
import SearchFilter from '@/components/SearchFilter';

const wrapper = shallowMount(People)

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
      person: {}
    };
    expect(typeof People.data).toBe('function');

    const defaultData = People.data();
    expect(defaultData).toEqual(data);
  })

  it('renders SearchFilter component', () => {
    expect(wrapper.find(SearchFilter)).toHaveLength(1);
  })
})
