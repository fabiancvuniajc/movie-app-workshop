import { MovieList } from './movies/components/MovieList'
import { useMovies } from './movies/hooks/useMovies'
import { CustomHeader } from './shared/components/CustomHeader'
import { PreviousSearches } from './shared/components/PreviousSearches'
import { SearchBar } from './shared/components/SearchBar'

export const MovieApp = () => {
  const { movies, previousTerms, hasSearched, handleSearch, handleTermClicked } = useMovies()

  return (
    <main className="movie-app">
      <CustomHeader
        title="MovieApp"
        description="Encuentra películas con OMDb y guarda tus búsquedas recientes"
      />

      <SearchBar onQuery={handleSearch} />

      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

      {movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        hasSearched && <p className="empty-state">No se encontraron resultados</p>
      )}
    </main>
  )
}
