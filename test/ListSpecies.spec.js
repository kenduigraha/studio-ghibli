import { shallowMount } from '@vue/test-utils'
import ListSpeciesComponent from '@/components/ListSpecies'

const mockSpecies = {
  id: '603428ba-8a86-4b0b-a9f1-65df6abef3d3',
  name: 'Cat',
  classification: 'Mammal',
  eye_colors: 'Brown, Black, Yellow, White, Emerald, Blue, Green',
  hair_colors: 'White, Black, Brown, Beige, Grey, Yellow',
  url:
    'https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3',
  people: [
    'https://ghibliapi.herokuapp.com/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec'
  ],
  films: [
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  ]
}

const doWrapperComponent = () => {
  return shallowMount(ListSpeciesComponent, {
    propsData: {
      species: mockSpecies
    }
  })
}

describe('test ListSpecies component', () => {
  test('it should success mounting ListSpecies component', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper.props().species).toEqual(mockSpecies)
  })

})
