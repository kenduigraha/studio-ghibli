import Vuex from 'vuex'

import mutations from './mutations'
import { counterAction } from './actions'

const state = {
  counter: 0,
  responseFilm: {},
  errResponseFilm: false
}

const getters = {
  getCounter: state => state.counter,
  evenOrOdd: state => (state.counter % 2 === 0 ? 'even' : 'odd'),
  getResponseFilm: state => state.responseFilm,
  getErrResponseFilm: state => state.errResponseFilm
}

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions: counterAction
  })
}

export default createStore
