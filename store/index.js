import Vuex from 'vuex'

import { mutations } from './mutations'
import { ghibliAction } from './actions'

const state = {
  counter: 0,
  data: {},
  error: false
}

const getters = {
  getCounter: state => state.counter,
  evenOrOdd: state => (state.counter % 2 === 0 ? 'even' : 'odd'),
  getFetchData: state => state.data,
  getErrorFetchData: state => state.error
}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions: ghibliAction
  })
}

export default createStore
