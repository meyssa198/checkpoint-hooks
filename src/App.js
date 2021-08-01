import MovieList from './componenets/MovieList';
import React, { useState } from 'react';
import {Data} from './Data'
import Filter from './componenets/Filter';
import AddMovie from './componenets/AddMovie';

function App() {

  const [movies, setMovies] = useState(Data);
  const [search, setSearch] = useState("");
  const [rate,setRate] = useState(0);
  const handleMovie=(newMovie)=>{setMovies([...movies,newMovie])}
  return (
    
    <div className="App">
  
      <Filter setSearch={setSearch} setRate={setRate}/>
      <AddMovie handleMovie={handleMovie}/>
      <MovieList movies={movies} search={search} rate={rate} /> 
    </div>
    
  );
}

export default App;
