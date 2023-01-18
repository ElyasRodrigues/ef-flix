import axios from "axios"

// Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=8b75c152380beffed2fa0b198543074e&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

export default api;
