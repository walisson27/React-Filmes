import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphup,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import MovieCard from "../components/MovieCard";
import "./Movie.css"
const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie =()=>{
 const {id} = useParams()
 const [movie, setMovie] = useState(null)

 const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }

  useEffect(() => {
    const movieUrL = `${moviesURl}${id}?${apiKey}`;
    getMovie(movieUrL)
  },[]);
  
 return(
    <div className="movie-page">
            {movie && (
                <>
                <MovieCard movie={movie} showLink={false} />
                <p className="tagline">{movie.tagline}</p>
                <dir className="info">
                    <h3>
                        <BsWallet2/>
                    </h3>
                </dir>
                </>
            )}
        </div>
    )
}
export default Movie;