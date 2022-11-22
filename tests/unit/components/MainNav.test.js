import { mount } from '@vue/test-utils';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainNav);
  });

  it('Displays the correct company name', () => {
    expect(wrapper.html()).toContain('Torres Careers');
  });
});
