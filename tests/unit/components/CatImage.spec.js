import { shallowMount } from '@vue/test-utils';
import CatImage from '@/components/CatImage.vue';
import { catDetailMock } from '@/helpers/getCats';

describe('CatImage component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CatImage, {
      propsData: {
        catDetail: catDetailMock,
      },
    });
  });
  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should paint cat image', () => {
    const img = wrapper.find('img');
    expect(img.exists()).toBeTruthy();
  });
});
