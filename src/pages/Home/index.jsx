import { useState, useEffect } from "react"
import api from "../../services/api"
import { Link } from "react-router-dom"
import "./home.css"


function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/popular", {
        params: {
          api_key: "8b75c152380beffed2fa0b198543074e",
          language: "pt-BR",
          page: page
        }
      })
      setMovies(response.data.results)
    }

    loadMovies()
    setLoading(false)

  }, [page])


  function nextPage() {
    let currentPage = page
    currentPage += 1
    setPage(currentPage)
  }

  function prevPage() {
    let currentPage = page
    if(currentPage <= 1){
      return
    }
    currentPage -= 1
    setPage(currentPage)
  }


  if(loading){
    return(
      <div className="loading"> 
        <h2>Carregando filmes..</h2>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="prev-and-next">
        <button onClick={prevPage}>{"<<"}</button>
        <button> {page} </button>
        <button onClick={nextPage}>{">>"}</button>
      </div>
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

      <div className="prev-and-next">
        <button onClick={prevPage}>{"<<"}</button>
        <button> {page} </button>
        <button onClick={nextPage}>{">>"}</button>
      </div>
    </div>
  );
}

export default Home;
