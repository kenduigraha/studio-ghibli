import { shallowMount } from '@vue/test-utils'
import ListFilmComponent from '@/components/ListFilm'

const mockPropsFilm = {
  id: '123',
  title: 'title',
  description: 'this is description',
  director: 'director',
  producer: 'producer',
  release_date: '11/11/2011',
  rt_score: '100'
}

const doWrapperComponent = () => {
  return shallowMount(ListFilmComponent, {
    propsData: {
      film: mockPropsFilm
    }
  })
}

describe('test navbar component', () => {
  test('it should success mounting ListFIlm component', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper.props().film).toEqual(mockPropsFilm)
  })
})
