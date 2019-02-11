import axiosWrapper from '../axiosWrapper'

const endpoint = '/vehicles'

const get = id => {
  return axiosWrapper.get(`${endpoint}/${id}`)
}

export default { get }
