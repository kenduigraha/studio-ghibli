import axiosWrapper from '../axiosWrapper'

const endpoint = '/species'

const get = id => {
  return axiosWrapper.get(`${endpoint}/${id}`)
}

export default { get }
