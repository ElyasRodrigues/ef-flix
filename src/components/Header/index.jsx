import {Link} from "react-router-dom"
import { BsCameraReels } from "react-icons/bs"

import "./header.css"

function Header() {
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
      </nav>
    </header>
  )
}

export default Header;