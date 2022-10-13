import { shallowMount, setupFetchStub } from '@vue/test-utils';
import CatsPage from '@/pages/CatsPage';
import { catsListMock } from '@/helpers/getCats';

describe('CatsPage component', () => {
  let wrapper;

  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve(catsListMock),
      });
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  beforeEach(() => {
    wrapper = shallowMount(CatsPage);
  });

  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should get the catslist', async () => {
    await wrapper.vm.getCatsList();

    expect(wrapper.vm.catsArray.length).toBeGreaterThanOrEqual(0);
  });
});
