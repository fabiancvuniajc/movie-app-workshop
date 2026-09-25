import axios from 'axios'

const omdbApiKey = import.meta.env.VITE_OMDB_API_KEY

if (!omdbApiKey) {
  throw new Error('Missing VITE_OMDB_API_KEY. Please configure it in your .env file.')
}

export const omdbApi = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: omdbApiKey,
  },
})
