import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ListFeatureComponent from '@/components/ListFeature'

const localVue = createLocalVue()

localVue.use(Vuex)

const actions = {
  fetchData: jest.fn()
}

const store = new Vuex.Store({
  state: {
    data: {},
    error: false
  },
  getters: {
    getFetchData: jest.fn()
  },
  actions
})

const params = 'films'
const doWrapperComponent = () => {
  return shallowMount(ListFeatureComponent, {
    store,
    localVue,
    propsData: {
      params
    }
  })
}

describe('test navbar component', () => {
  test('it should success mounting navbar component', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper).toBeTruthy()
  })

  test('it should have props appropriate with data mock', () => {
    const wrapper = doWrapperComponent()

    expect(wrapper.props().params).toEqual(params)
  })

  test('it should called fetchData function properly', () => {
    const wrapper = doWrapperComponent()

    wrapper.vm.fetchData()

    expect(actions.fetchData).toHaveBeenCalled()
  })
})
