import { omdbApi } from '../api/omdb.api'
import type { Movie } from '../interfaces/movie.interface'
import type { OMDbErrorResponse, OMDbResponse } from '../interfaces/omdb.response'

export const getMoviesByQuery = async (query: string): Promise<Movie[]> => {
  try {
    const { data } = await omdbApi.get<OMDbResponse | OMDbErrorResponse>('/', {
      params: {
        s: query,
      },
    })

    if (data.Response === 'False') {
      return []
    }

    return data.Search.map((movie) => ({
      imdbID: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster === 'N/A' ? '/no-poster.png' : movie.Poster,
    }))
  } catch {
    return []
  }
}
