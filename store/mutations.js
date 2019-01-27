const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  getResponseFilm(state, responseFilm) {
    state.responseFilm = responseFilm
  },
  responseFilmError(state) {
    state.errResponseFilm = true
  }
}

export default mutations
