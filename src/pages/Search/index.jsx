import { useEffect, useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import api from "../../services/api"

import "./search.css"

function Search(){
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  useEffect(() => {
    async function loadMoviesSearch() {
      const response = await api.get(`search/movie`, {
        params: {
          api_key: "8b75c152380beffed2fa0b198543074e",
          query: query,
          language: "pt-BR",
        }
      })
      setMovies(response.data.results)
    }

    loadMoviesSearch()
    
  }, [query])

  if(movies.length === 0){
    return(
      <div className="loadingTitle">
        <h2>Buscando resultados para "{query}"...</h2>
      </div>
    )
  }
  
  return(
    <div className="container">
      <div className="search">
        <h2>Resustado para: {query}</h2>

        <div className="list-movies">
          {movies.map((item) => {
            return (
              <article key={item.id}>
                <strong>{item.title}</strong>

                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />

                <Link to={`/details/${item.id}`}>Ver mais</Link>
              </article>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default Search