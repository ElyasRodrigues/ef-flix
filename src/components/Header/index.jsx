import {Link, useNavigate } from "react-router-dom"
import { BsCameraReels, BsSearch } from "react-icons/bs"

import "./header.css"
import { useState } from "react"

function Header() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)

    setSearch("")
  }



  return(
    <header>
      <Link to={"/"}>
        <h2>
          <span>ER FLIX </span>
          <span><BsCameraReels/> </span>
        </h2>
      </Link>
      <nav className="menu">
        <Link to={"/favorites"}>Meus Filmes</Link>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="pesquisar filme" 
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit"><BsSearch/></button>
        </form>
      </nav>
    </header>
  )
}

export default Header;