import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'

interface Props {
  onQuery: (term: string) => void
  placeholder?: string
}

export const SearchBar = ({ onQuery, placeholder = 'Buscar película...' }: Props) => {
  const [query, setQuery] = useState('')
  const lastSubmittedTerm = useRef('')

  const handleSearch = () => {
    const normalizedTerm = query.trim().toLowerCase()

    if (!normalizedTerm) {
      return
    }

    lastSubmittedTerm.current = normalizedTerm
    onQuery(normalizedTerm)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const normalizedTerm = query.trim().toLowerCase()

      if (!normalizedTerm || normalizedTerm === lastSubmittedTerm.current) {
        return
      }

      lastSubmittedTerm.current = normalizedTerm
      onQuery(normalizedTerm)
    }, 700)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [query, onQuery])

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  )
}
