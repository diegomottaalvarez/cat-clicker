import { shallowMount } from '@vue/test-utils';
import CatsList from '@/components/CatsList';
import { catsListMock } from '@/helpers/getCats';

describe('CatsList component', () => {
  window.scrollTo = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CatsList, {
      propsData: {
        catsList: catsListMock,
      },
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should paint catslist when data is received', async () => {
    let list = wrapper.find('[data-testid="catsList"]');
    expect(list.exists()).toBeTruthy();
  });

  test('should set selected cat when name is clicked', async () => {
    const name = wrapper.find('.cat-selection-button');

    await wrapper.vm.$nextTick(); // Wait until $emits have been handled

    name.trigger('click');
    expect(wrapper.emitted().catSelection).toBeTruthy();
  });
});
