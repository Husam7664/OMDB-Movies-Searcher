import axios from 'axios'

let baseUrl = 'http://www.omdbapi.com/'

let instance = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
})

export default {
  instance: instance,
}
