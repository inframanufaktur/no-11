require('dotenv').config()

const { API_HOST, API_KEY, API_STAGE } = process.env

const axios = require('axios')

const apiService = axios.create({
  baseURL: API_HOST,
  headers: {
    Authorization: `bearer ${API_KEY}`,
  },
})

apiService.interceptors.request.use(
  async (config) => {
    if (API_STAGE === 'preview') {
      config.url = `${config.url}&publicationState=preview`
    }

    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

module.exports = apiService
