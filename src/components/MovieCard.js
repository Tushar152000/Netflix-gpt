import React from 'react'
import { IMG_URL } from './utilis/links'

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-[9rem]  cursor-pointer'>
        <img  className="m-2  "src={IMG_URL + poster_path} alt='MovieCards'/>
      
    </div>
  )
}

export default MovieCard
