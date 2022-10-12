import { shallowMount } from '@vue/test-utils';
import CatDetail from '@/components/CatDetail';
describe('CatDetail component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CatDetail);
  });
  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
