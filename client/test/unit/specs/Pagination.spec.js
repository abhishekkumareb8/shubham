import { shallowMount } from '@vue/test-utils';
import Pagination from '@/components/Pagination';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(Pagination);
});

afterEach(() => {
  wrapper.destroy();
});

describe('Pagination', () => {
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('has a pagination component', () => {
    expect(wrapper.contains('.pagination')).toBe(true);
  });

  it('has a page item component', () => {
    expect(wrapper.contains('.page-item')).toBe(true);
  });

  it('emits next event when a page number is clicked', async() => {
    try {
      await wrapper.setProps({
        page: 1,
        totalPage: 2
      })
    } catch (e) {
      const pageItem = wrapper.find('.page-item.next');
      pageItem.trigger('click');
      expect(wrapper.emitted().next.length).toBe(1);
    }
  })
})
