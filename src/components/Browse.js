import React from 'react'
import Header from './Header';
import useNowPlayingMovie from '../hooks/useTrendingapimovie';
import MainContainer from './MainContainer';
import usePopularMovie from '../hooks/usePoplularMovies'
import useUpcomingMovie from '../hooks/useUpcomingMovie';
import useTopratedMovie from '../hooks/useTopRatedMovie';
import SecondaryContainer from './SecondaryContainer'
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () =>    {
  const showgptpage=useSelector((store)=>store.gpt.togglegpt);
  useNowPlayingMovie();
 usePopularMovie();
 useUpcomingMovie();
 useTopratedMovie();
  
  return (
    
    <div>
      <Header/>
    {  showgptpage ? (<GptSearch/>
    ):(
    <>
    <MainContainer/>
      <SecondaryContainer/>
      </>
      )}  
          
          
    </div>
  )
}

export default Browse
