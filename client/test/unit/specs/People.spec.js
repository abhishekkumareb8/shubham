import { shallowMount } from '@vue/test-utils';
import People from '@/components/People';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(People);
});

afterEach(() => {
  wrapper.destroy();
});

describe('People', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

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
      filterParams: {},
      loading: true
    };
    expect(typeof People.data).toBe('function');

    const defaultData = People.data();
    expect(defaultData).toEqual(data);
  })

  it('has a people component', () => {
    expect(wrapper.contains('.people')).toBe(true);
  });

  it('renders loading component before people data is filled', () => {
    expect(wrapper.findAll('.loading').length).toBe(1);
  });

  it('renders table if total people count is greater than 0 ', () => {
    wrapper.setData({ 
      people: [{
        name: 'Joe Hunter',
        location: '205 College St',
        email: 'joe.hunter@example.com',
        status: 'Discarded'
      }],
      total: 1 
    })
    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.findAll('.table-responsive').length).toBe(1);
    }) 
  });

  it('emits toggleModal event when View button is clicked', () => {
    wrapper.setData({ 
      people: [{
        name: 'Joe Hunter',
        location: '205 College St',
        email: 'joe.hunter@example.com',
        status: 'Discarded'
      }],
      total: 1 
    })
    wrapper.vm.$nextTick().then(() => {
      const viewBtn = wrapper.find('.viewBtn');
      viewBtn.trigger('click');
      expect(wrapper.emitted().toggleModal.length).toBe(1);
    })
  })

  it('emits sort event when a table header is clicked', () => {
    wrapper.setData({ 
      people: [{
        name: 'Joe Hunter',
        location: '205 College St',
        email: 'joe.hunter@example.com',
        status: 'Discarded'
      }],
      total: 1 
    })
    wrapper.vm.$nextTick().then(() => {
      const tableHeader = wrapper.find('th');
      tableHeader.trigger('click');
      expect(wrapper.emitted().sort.length).toBe(1);
    })
  })
})
