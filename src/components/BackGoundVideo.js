import React from 'react'
import {useSelector } from 'react-redux'
import useBackGroundVideo from '../hooks/usebackgroundvideo';



const BackGoundVideo = ({movieId}) => {
  const addtrailer=useSelector((store)=>store.movie.trailerVideo);
  useBackGroundVideo(movieId); // Here We are making Custome Hooks for background video api Call
 
  return (
   
    <div className='w-screen -mt-20'>
      <iframe className='w-screen aspect-video h-screen'
       src={"https://www.youtube.com/embed/"+addtrailer?.key+"?&autoplay=1&mute=1&loop=1"} 
       height="56px"
       
       title="YouTube video player" frameBorder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     ></iframe>
   
      
    </div>
  )
}

export default BackGoundVideo
