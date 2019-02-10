export const mutations = {
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  FETCH_DATA_SUCCESS(state, payload) {
    state.data = payload
  },
  FETCH_DATA_FAILED(state) {
    state.error = true
  }
}
