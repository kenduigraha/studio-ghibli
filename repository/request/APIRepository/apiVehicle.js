import axiosWrapper from '../axiosWrapper'

const endpoint = '/vehicles'

const get = () => {
  return axiosWrapper.get(`${endpoint}`)
}

export default { get }
