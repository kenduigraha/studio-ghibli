import RequestFactory from '../../repository/request/RequestFactory'

const filmsRequest = RequestFactory.get('films')

const counterAction = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd({ commit, state }) {
    if ((state.counter + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   commit('increment')
      //   resolve()
      // }, 1000)
      filmsRequest
        .get()
        .then(function(response) {
          // handle success
          commit('getResponseFilm', response)
          resolve()
        })
        .catch(function(error) {
          // handle error
          // eslint-disable-next-line no-console
          console.log(error)
          commit('responseFilmError')
        })
    })
  }
}

export default counterAction
