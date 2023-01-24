import { useEffect, useState } from "react";
import api from '../../Services/api';
import {Link} from 'react-router-dom';
import './home.css';



// https://api.themoviedb.org/3/movie/now_playing?api_key=44d0ab210f398931c84fe301b3ddf8f3&language=pt-BR


function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get('movie/now_playing',{
                params:{
                    api_key:'44d0ab210f398931c84fe301b3ddf8f3',
                    language:'pt-BR',
                    page:1,
                }
            })

            // console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10))  
             setLoading(false);

            
        }

        loadFilmes();

    },[])

    if(loading){
        return(
            <div>
                <h2 className="loading">Carregando Filmes...</h2>
            </div>
        )
    }



    return(
        <div className="container">
            <div className="lista-filmes">
            {filmes.map((filme)=>{
                return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                )
            })}
            </div>
        </div>
    )
} 

export default Home;
