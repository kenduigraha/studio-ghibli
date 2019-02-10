import RequestFactory from '../../repository/request/RequestFactory'

const ghibliAction = {
  fetchData({ commit }, { params = 'films', id = '' }) {
    return new Promise((resolve, reject) => {
      RequestFactory.feature(params)
        .get(id)
        .then(function(response) {
          // eslint-disable-next-line no-console
          console.log(response)
          // handle success
          commit('FETCH_DATA_SUCCESS', response.data)
          resolve()
        })
        .catch(function(error) {
          // handle error
          // eslint-disable-next-line no-console
          console.log(error)
          commit('FETCH_DATA_FAILED')
        })
    })
  }
}

export default ghibliAction
