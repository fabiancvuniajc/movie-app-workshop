import type { Movie } from '../interfaces/movie.interface'
import { MovieCard } from './MovieCard'

interface Props {
  movies: Movie[]
}

export const MovieList = ({ movies }: Props) => {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </section>
  )
}
