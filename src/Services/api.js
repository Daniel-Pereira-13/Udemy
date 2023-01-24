import axios from "axios";


//Base da URL: https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/now_playing?api_key=44d0ab210f398931c84fe301b3ddf8f3

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;
