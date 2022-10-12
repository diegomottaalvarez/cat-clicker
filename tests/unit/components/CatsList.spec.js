import { shallowMount } from '@vue/test-utils';
import CatsList from '@/components/CatsList';
import { catsListMock } from '@/helpers/getCats';

describe('CatsList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CatsList, {
      propsData: {
        catsList: catsListMock,
      },
    });
  });

  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should paint catslist when data is received', async () => {
    let list = wrapper.find('[data-testid="catsList"]');
    expect(list.exists()).toBeTruthy();
  });
});
