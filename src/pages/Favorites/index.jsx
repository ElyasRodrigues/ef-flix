import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify"


import "./favorites.css"

function Favorites() {
  const [movies, setMovies] = useState([])

  useEffect(() => {

    const myList = localStorage.getItem("@erflix")
    setMovies(JSON.parse(myList) || [])

  }, [])

  function deleteMovie(id) {
    let filterMovies = movies.filter((item) => {
      return (item.id !== id)
    })

    setMovies(filterMovies)
    localStorage.setItem("@erflix", JSON.stringify(filterMovies))
    toast.success("Filme removido com sucesso")

  }

  return (
    <div className="container">
      <div className="favorites">
        <h1>Meus filmes</h1>

        {movies.length === 0 && 
          <div className="not-movies">
            <span>
              Poxa, você não possui nenhum filme salvo :(
            </span>
            <Link to={"/"}>Ver filmes</Link>
          </div>
        }

        <ul>
          {movies.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.title}</span>
                <div className="fav-btns">
                  <Link to={`/details/${item.id}`}>Ver detalhes</Link>
                  <button onClick={() => deleteMovie(item.id)}>Excluir</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
