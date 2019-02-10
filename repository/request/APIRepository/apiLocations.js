import axiosWrapper from '../axiosWrapper'

const endpoint = '/locations'

const get = () => {
  return axiosWrapper.get(`${endpoint}`)
}

export default { get }
