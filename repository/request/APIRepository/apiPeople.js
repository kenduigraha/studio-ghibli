import axiosWrapper from '../axiosWrapper'

const endpoint = '/people'

const get = () => {
  return axiosWrapper.get(`${endpoint}`)
}

export default { get }
