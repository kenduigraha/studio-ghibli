import { shallowMount } from '@vue/test-utils'
import ListPeopleComponent from '@/components/ListPeople'

const mockPeople = {
  id: '466bc926-2024-4653-ac63-fe52f2dc8c7b',
  name: 'Natori',
  gender: 'Male',
  age: 'NA',
  eye_color: 'Blue',
  hair_color: 'Grey',
  films: [
    'https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81'
  ],
  species:
    'https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3',
  url:
    'https://ghibliapi.herokuapp.com/people/466bc926-2024-4653-ac63-fe52f2dc8c7b'
}

const doWrapperComponent = () => {
  return shallowMount(ListPeopleComponent, {
    propsData: {
      people: mockPeople
    }
  })
}

describe('test ListPeople component', () => {
  test('it should success mounting ListPeople component', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper.props().people).toEqual(mockPeople)
  })

})
