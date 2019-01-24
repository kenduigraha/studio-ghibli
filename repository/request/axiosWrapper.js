import axios from 'axios'

const baseURL = 'https://ghibliapi.herokuapp.com'

export default axios.create({
  baseURL
})
