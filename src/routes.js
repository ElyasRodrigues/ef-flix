import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Favorite from "./pages/Favorites"
import Search from "./pages/Search"

import Error from "./pages/Error"

function RoutesApp() {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/details/:id" element={ <Details/> }/>
        <Route path="/favorites" element={ <Favorite/> } />
        <Route path="/search" element={ <Search/> } />

        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp