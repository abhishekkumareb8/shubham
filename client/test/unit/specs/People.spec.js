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
      filterParams: {}
    };
    expect(typeof People.data).toBe('function');

    const defaultData = People.data();
    expect(defaultData).toEqual(data);
  })

  it('has a people component', () => {
    expect(wrapper.contains('.people')).toBe(true);
  });

  it('renders no results component people count is 0', () => {
    expect(wrapper.findAll('.no-results').length).toBe(1);
  });

  it('renders table if total people count is greater than 0 ', () => {
    wrapper.setData({ 
      people: [{
        name: 'anc',
        location: 'a',
        email: 'asd',
        status: 'dis'
      }],
      total: 1 
    })
    // wrapper.vm.$forceUpdate();
    wrapper.vm.$nextTick().then(() => {
      // console.log(wrapper.html());
      expect(wrapper.findAll('.table-responsive').length).toBe(1);
    })
    // Vue.nextTick(() => {
    //   expect(wrapper.findAll('.table-responsive').length).toBe(1);
    //   done();
    // })
    // console.log(wrapper.vm.total);
    // expect(wrapper.findAll('.table-responsive').length).toBe(1);
    // expect(wrapper.vm.total).toBe(1);
    // expect(wrapper.classes()).toContain('table');
    // expect(wrapper.findAll('div').hasClass('sfoo')).toBe(true)
    // viewBtn.trigger('click');
    // expect(wrapper.emitted().toggleModal.length).toBe(1);
    // expect(wrapper.findAll('.viewBtn').length).toBe(1);
});

  it('emits toggleModal event when View button is clicked', () => {
    wrapper.setData({ 
      people: [{
        name: 'anc',
        location: 'a',
        email: 'asd',
        status: 'dis'
      }],
      total: 1 
    })
    // wrapper.vm.$forceUpdate();
    wrapper.vm.$nextTick().then(() => {
      const viewBtn = wrapper.find('.viewBtn');
      viewBtn.trigger('click');
      expect(wrapper.emitted().toggleModal.length).toBe(1);
    })
  })
})
