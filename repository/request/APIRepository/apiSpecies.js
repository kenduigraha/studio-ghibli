import axiosWrapper from '../axiosWrapper'

const endpoint = '/species'

const get = () => {
  return axiosWrapper.get(`${endpoint}`)
}

export default { get }
