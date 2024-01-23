import React from 'react'
import BackGoundVideo from './BackGoundVideo'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'



const MainContainer = () => {
    const movie=useSelector((store)=>store.movie?.nowplayingMovie);
    // usePopularMovie();
    // const popularmovieapi=useSelector((store)=>store.movie?.popularMovie)
    if(!movie  ) return;
   const mainMovie=movie[14];
   

    console.log(mainMovie);
    // console.log(popularmovieapi);

    const {original_title,overview,id}=mainMovie;
    

  return (
    <div>
      <VideoTitle title={original_title} View={overview}/>
      <BackGoundVideo movieId={id}/>
      
      
      
    </div>
  )
}

export default MainContainer
