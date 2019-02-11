import { shallowMount } from '@vue/test-utils'
import ListLocationComponent from '@/components/ListLocation'

const mockLocation = {
  id: '11014596-71b0-4b3e-b8c0-1c4b15f28b9a',
  name: 'Irontown',
  climate: 'Continental',
  terrain: 'Mountain',
  surface_water: '40',
  residents: [
    'https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0',
    'https://ghibliapi.herokuapp.com/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b'
  ],
  films: [
    'https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6'
  ],
  url: [
    'https://ghibliapi.herokuapp.com/locations/11014596-71b0-4b3e-b8c0-1c4b15f28b9a'
  ]
}

const doWrapperComponent = () => {
  return shallowMount(ListLocationComponent, {
    propsData: {
      location: mockLocation
    }
  })
}

describe('test ListLocation component', () => {
  test('it should success mounting ListLocation component', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper.props().location).toEqual(mockLocation)
  })

})
