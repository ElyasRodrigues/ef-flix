import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../services/api"

import "./details.css"

function Details() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDetails() {
      await api.get(`movie/${id}`, {
        params:{
          api_key: "8b75c152380beffed2fa0b198543074e",
          language: "pt-BR",
          page: 1,
        }
      })
      .then((res) => {
        setDetails(res.data)
        setLoading(false)
      })
      .catch(() => {
        navigate("/", {
          replace: true
        })
        return;
      })
    }

    loadDetails()


  }, [id, navigate])

  function salvedMovie() {
    const myList = localStorage.getItem("@erflix")

    let moviesSalved = JSON.parse(myList) || [];

    const hasMovie = moviesSalved.some((movieSalved) => movieSalved.id === details.id)

    if(hasMovie){
      toast.warning("Esse filme já foi salvo")
      return;
    }

    moviesSalved.push(details)
    localStorage.setItem("@erflix", JSON.stringify(moviesSalved))
    toast.success("Filme salvo com sucesso")
  }

  if(loading){
    return (
      <div className="loading-movie">
        <h1>Carregando as informações do filme...</h1>
      </div>
    )
  }


  return(
    <div className="container">
      <div className="movie-detail">
        <img src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} alt={details.title} />

        <div className="area-info">
          <div className="info">
            <h1>{details.title}</h1>
            <p>{details.tagline}</p>

            <strong>Avaliação: {(details.vote_average).toFixed(1)} / 10</strong>

            <h3>Sinopse</h3>
            <span>{details.overview}</span>
          </div>
          
          <div className="area-btns">
            <button onClick={salvedMovie}>Salvar</button>
            <button>
              <a href={`https://youtube.com/results?search_query=${details.title} trailer`} target="blank" rel="external">
                Trailer
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details