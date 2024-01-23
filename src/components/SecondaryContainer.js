import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movie);

  return (
    
      movies.nowplayingMovie && movies.popularMovie && movies.upcomingMovie&& movies.topratedMovie &&
      (<div className='  bg-black '>
     <div className=' -mt-[12rem] relative z-20'>
        <MovieList title={"Now Playing Movies"} Movies={movies.nowplayingMovie} />
        <MovieList title={"Top Rated on Netflix"} Movies={movies.topratedMovie} />
        <MovieList title={"Only on Netflix"} Movies={movies.nowplayingMovie} />
        <MovieList title={"Upcoming Movie"} Movies={movies.upcomingMovie} />
        <MovieList title={"Popular on Netflix"} Movies={movies.popularMovie} />
        </div>
    </div>)
  )
}

export default SecondaryContainer
