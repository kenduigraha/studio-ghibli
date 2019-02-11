import axiosWrapper from '../axiosWrapper'

const endpoint = '/films'

const get = id => {
  return axiosWrapper.get(`${endpoint}/${id}`)
}

const post = data => {
  return axiosWrapper.post(`${endpoint}`)
}

export default { get, post }
