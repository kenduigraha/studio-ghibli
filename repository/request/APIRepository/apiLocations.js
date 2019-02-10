import axiosWrapper from '../axiosWrapper'

const endpoint = '/locations'

const get = id => {
  return axiosWrapper.get(`${endpoint}/${id}`)
}

export default { get }
