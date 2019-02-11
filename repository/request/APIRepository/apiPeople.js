import axiosWrapper from '../axiosWrapper'

const endpoint = '/people'

const get = id => {
  return axiosWrapper.get(`${endpoint}/${id}`)
}

export default { get }
