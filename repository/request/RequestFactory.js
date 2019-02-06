import { apiFilm } from './APIRepository'

const requestRepository = {
  films: apiFilm
}

const RequestFactory = {
  get: name => {
    return requestRepository[name]
  }
}

export default RequestFactory
