interface Props {
  searches: string[]
  onLabelClicked: (term: string) => void
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  if (searches.length === 0) {
    return null
  }

  return (
    <section className="previous-searches">
      <ul>
        {searches.map((term) => (
          <li key={term} onClick={() => onLabelClicked(term)}>
            {term}
          </li>
        ))}
      </ul>
    </section>
  )
}
