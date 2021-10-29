import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({movies,search,rate}) => {
    console.log(movies)
    return (
         <div style ={{display:"flex", marginRight:"50px", padding:"10px"}}>
            {
               movies
               .filter((movie)=>(movie.rate>=rate && movie.title.toLowerCase().trim().includes(search.toLowerCase().trim())  ))
               .map((movie)=>(
             
                <MovieCard movie={movie} key={movie.id}/>
                
               ))
            }
        </div>
    )
}

export default MovieList
