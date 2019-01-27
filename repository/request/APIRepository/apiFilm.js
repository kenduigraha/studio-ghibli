import axiosWrapper from '../axiosWrapper'

const endpoint = '/films'

const get = () => {
  return axiosWrapper.get(`${endpoint}`)
}

const post = data => {
  return axiosWrapper.post(`${endpoint}`)
}

export default { get, post }
