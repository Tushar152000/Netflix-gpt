import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,Movies}) => {
    // console.log(Movies);

  return (
    <div className='  w-full  '>
      <h1 className='text-2xl text-white px-7'>{title}</h1>
      <div className='flex scrollbar-hide overflow-x-scroll  m-4 py-1 '> 
        
        <div className='flex gap-2 '>
       {Movies.map((i)=>(
         <MovieCard key={i.id} poster_path={i.poster_path}/>
       ))}
       
            
        </div>
        
        </div>
    </div>
  )
}

export default MovieList
