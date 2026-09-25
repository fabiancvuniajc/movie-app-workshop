import type { Movie } from '../interfaces/movie.interface'

interface Props {
  movie: Movie
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <article className="movie-card">
      <img src={movie.poster} alt={movie.title} loading="lazy" />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.year}</span>
      </div>
    </article>
  )
}
