import {
  apiFilm,
  apiLocations,
  apiPeople,
  apiSpecies,
  apiVehicle
} from './APIRepository'

const requestRepository = {
  films: apiFilm,
  locations: apiLocations,
  people: apiPeople,
  species: apiSpecies,
  vehicle: apiVehicle
}

const RequestFactory = {
  feature: name => {
    return requestRepository[name]
  }
}

export default RequestFactory
