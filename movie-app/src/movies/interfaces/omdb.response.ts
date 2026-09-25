export interface OMDbSearchItem {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface OMDbResponse {
  Search: OMDbSearchItem[]
  totalResults: string
  Response: 'True'
}

export interface OMDbErrorResponse {
  Response: 'False'
  Error: string
}
