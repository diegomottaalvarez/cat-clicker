import { shallowMount } from '@vue/test-utils';
import CatDetail from '@/components/CatDetail';
import { catDetailMock } from '@/helpers/getCats';
import CatPet from '@/components/CatPet';
describe('CatDetail component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CatDetail, {
      propsData: {
        catDetail: catDetailMock,
      },
    });
  });
  test('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should add 1 when click', async () => {
    const child = wrapper.findComponent(CatPet);
    let catClicks = Number(wrapper.vm.catDetail.catClicks);
    if (!catClicks) catClicks = 0;
    await child.vm.$emit('catPetClick');
    const catClicksAfter = Number(wrapper.vm.catDetail.catClicks);
    expect(catClicksAfter).toBe(catClicks + 1);
  });
});
