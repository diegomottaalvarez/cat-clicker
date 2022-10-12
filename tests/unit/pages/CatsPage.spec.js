import { shallowMount } from '@vue/test-utils';
import CatsPage from '@/pages/CatsPage';
import { catsListMock } from '@/helpers/getCats';

describe('CatsPage component', () => {
  let wrapper;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          catsListMock,
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(CatsPage);
    jest.clearAllMocks();
  });

  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should get the catslist', async () => {
    await wrapper.vm.getCatsList();
    expect(wrapper.vm.catsArray.length).toBeGreaterThanOrEqual(0);
  });
});
