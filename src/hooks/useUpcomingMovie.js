import { useEffect } from 'react';
import { Trending_api } from '../components/utilis/links';
import { useDispatch } from 'react-redux';
import {addupcomingMovie } from '../components/utilis/movieSlice';



const useUpcomingMovie=()=>{ 
    const dispatch=useDispatch();
const upcomingmovie=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming', Trending_api);
    const json= await data.json()
     dispatch(addupcomingMovie(json.results ));
  };
  useEffect(()=>{
   upcomingmovie();
      },[]);
    }
export default useUpcomingMovie;