import React from "react"
import { getQuotes } from "../services"


export const MainPage = () => {
  const [quotes, setQuotes] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(
    () =>
      getQuotes()
        .then(response => response.json())
        .then(data => setQuotes(data))
        .finally(() => setIsLoading(false)),
    []
  )

  return (
    <>
      <h1>Simpsons quotes</h1>
  
      {isLoading && <p>Loading...</p>}
  
      <ul>
        {quotes.map(({ quote }) => (
          <li key={quote}>{quote}</li>
        ))}
      </ul>
    </>
  )
}