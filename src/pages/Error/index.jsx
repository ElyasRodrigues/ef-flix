import { Link } from "react-router-dom"
import "./error.css"

function Error() {
  return(
    <div className="error">
      <h1>ERROR 404</h1>
      <h2>OPS!! Parece que essa página não existe :(</h2>

      <Link to={"/"}>Ver filmes</Link>

    </div>
  )
}

export default Error