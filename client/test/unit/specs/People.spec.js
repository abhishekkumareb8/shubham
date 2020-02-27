import { shallowMount } from '@vue/test-utils'
import People from '@/components/People';

const wrapper = shallowMount(People)

describe('People', () => {
  it('has a mounted() hook', () => {
    expect(typeof People.mounted).toBe('function')
  })

  it('sets the correct default data', () => {
    let data = {
      people: [],
      total: 0,
      page: 0,
      per_page: 0,
      totalPage: 0,
      searchText: '',
      person: {}
    };
    expect(typeof People.data).toBe('function')
    const defaultData = People.data()
    expect(defaultData.people.length).toBe(0)
    expect(defaultData).toEqual(data)
  })
})
