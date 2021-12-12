require('dotenv').config()

const { API_HOST, API_KEY, ELEVENTY_ENV } = process.env

const axios = require('axios')

const apiService = axios.create({
  baseURL: API_HOST,
  headers: {
    Authorization: `bearer ${API_KEY}`,
  },
})

apiService.interceptors.request.use(
  async (config) => {
    if (ELEVENTY_ENV !== 'production') {
      config.url = `${config.url}&publicationState=preview`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

module.exports = apiService
