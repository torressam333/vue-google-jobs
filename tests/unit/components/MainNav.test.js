import { mount } from '@vue/test-utils';
import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainNav);
  });

  it('Displays the correct company name', () => {
    expect(wrapper.text()).toContain('Torres Careers');
  });

  it('Displays menu items for navigation', () => {
    // Find all list items
    const navigationMenuItems = wrapper.findAll('[data-test="items"]');
    const navMenuItemsText = navigationMenuItems.map((item) => item.text());

    expect(navigationMenuItems.length).toBe(6);
    expect(navMenuItemsText).toEqual([
      'Teams',
      'Locations',
      'Life at Torres Co',
      'How we hire',
      'Students',
      'Jobs',
    ]);
  });
});
