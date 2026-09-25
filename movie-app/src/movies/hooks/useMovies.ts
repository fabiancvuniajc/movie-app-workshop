import { useRef, useState } from 'react'
import { getMoviesByQuery } from '../actions/get-movies-by-query.action'
import type { Movie } from '../interfaces/movie.interface'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [previousTerms, setPreviousTerms] = useState<string[]>(['batman'])
  const [hasSearched, setHasSearched] = useState(false)
  const moviesCache = useRef<Record<string, Movie[]>>({})
  const latestRequestId = useRef(0)

  const runSearch = async (normalizedTerm: string) => {
    const requestId = ++latestRequestId.current

    if (moviesCache.current[normalizedTerm]) {
      if (requestId === latestRequestId.current) {
        setMovies(moviesCache.current[normalizedTerm])
        setHasSearched(true)
      }

      return
    }

    const results = await getMoviesByQuery(normalizedTerm)
    moviesCache.current[normalizedTerm] = results

    if (requestId === latestRequestId.current) {
      setMovies(results)
      setHasSearched(true)
    }
  }

  const handleSearch = async (query: string) => {
    const normalizedTerm = query.trim().toLowerCase()

    if (!normalizedTerm) {
      return
    }

    setPreviousTerms((previous) => {
      if (previous.includes(normalizedTerm)) {
        return previous
      }

      return [normalizedTerm, ...previous].slice(0, 7)
    })

    await runSearch(normalizedTerm)
  }

  const handleTermClicked = async (term: string) => {
    const normalizedTerm = term.trim().toLowerCase()

    if (!normalizedTerm) {
      return
    }

    await runSearch(normalizedTerm)
  }

  return {
    movies,
    previousTerms,
    hasSearched,
    handleSearch,
    handleTermClicked,
  }
}
