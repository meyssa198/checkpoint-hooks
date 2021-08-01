import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
const MovieList = ({movies,search,rate}) => {
    console.log(movies)
    return (
         <div style ={{display:"flex", marginRight:"50px"}}>
            {
               movies
               .filter((movie)=>(movie.rate>=rate && movie.title.toLowerCase().trim().includes(search.toLowerCase().trim())  ))
               .map((movie)=>(
               <Link to={`/description/${movie.id}`}>
                <MovieCard movie={movie} key={movie.id}/></Link> 
                
               ))
            }
        </div>
    )
}

export default MovieList
