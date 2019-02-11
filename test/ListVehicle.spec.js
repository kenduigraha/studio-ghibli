import { shallowMount } from '@vue/test-utils'
import ListVehicleComponent from '@/components/ListVehicle'

const mockVehicle = {
  id: '4e09b023-f650-4747-9ab9-eacf14540cfb',
  name: 'Air Destroyer Goliath',
  description: 'A military airship utilized by the government to access Laputa',
  vehicle_class: 'Airship',
  length: '1,000',
  pilot:
    'https://ghibliapi.herokuapp.com/people/40c005ce-3725-4f15-8409-3e1b1b14b583',
  films:
    'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe',
  url:
    'https://ghibliapi.herokuapp.com/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb'
}

const doWrapperComponent = () => {
  return shallowMount(ListVehicleComponent, {
    propsData: {
      vehicle: mockVehicle
    }
  })
}

describe('test ListVehicle component', () => {
  test('it should success mounting ListVehicle component', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper.props().vehicle).toEqual(mockVehicle)
  })

})
