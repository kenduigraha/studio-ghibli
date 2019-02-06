import { shallowMount } from '@vue/test-utils'
import ListFeatureComponent from '@/components/ListFeature'

describe('test navbar component', () => {
  test('it should success mounting navbar component', () => {
    const wrapper = shallowMount(ListFeatureComponent)

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const params = 'films'
    const wrapper = shallowMount(ListFeatureComponent, {
      propsData: {
        params
      }
    })

    expect(wrapper.props().params).toEqual(params)
  })
})
