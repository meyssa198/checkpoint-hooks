import MovieList from './componenets/MovieList';
import React, { useState } from 'react';
import {Data} from './Data'
import Filter from './componenets/Filter';
import AddMovie from './componenets/AddMovie';
import { Route} from 'react-router-dom'
import Description from './componenets/Description';

function App() {

  const [movies, setMovies] = useState(Data);
  const [search, setSearch] = useState("");
  const [rate,setRate] = useState(0);
  const handleMovie=(newMovie)=>{setMovies([...movies,newMovie])}
  return (
    
    <div className="App">
    <Route exact path="/" render={props=>(  <>
      <Filter setSearch={setSearch} setRate={setRate}/>
      <AddMovie handleMovie={handleMovie}/>
      <MovieList movies={movies} search={search} rate={rate} />  </>)} />

      <Route path="/description/:id" render={props=>
      
     { 
       const id = Number(props.match.params.id) 
       const movie = movies.find(movie => movie.id === id)
     return <Description movie={movie}/>}
     } />
    </div>
    
  );
}

export default App;
