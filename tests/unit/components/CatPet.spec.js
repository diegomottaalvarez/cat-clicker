import { shallowMount } from '@vue/test-utils';
import CatPet from '@/components/CatPet';

describe('CatPet component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CatPet, {});
  });
  test('click in button should emit the add click event', async () => {
    const increaseButton = wrapper.find('[data-testid="increaseBtn"]');

    await wrapper.vm.$nextTick(); // Wait until $emits have been handled

    increaseButton.trigger('click');
    expect(wrapper.emitted().catPetClick).toBeTruthy();
  });
});
