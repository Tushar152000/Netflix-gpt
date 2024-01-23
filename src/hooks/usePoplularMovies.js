import { useEffect } from 'react';
import { Trending_api } from '../components/utilis/links';
import { useDispatch } from 'react-redux';
import { addPopularMovie } from '../components/utilis/movieSlice';



const usePopularMovie=()=>{ 
    const dispatch=useDispatch();
const popularmovie=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/tv/popular', Trending_api);
    const json= await data.json()
     dispatch(addPopularMovie(json.results ));
  };
  useEffect(()=>{
    popularmovie();
      },[]);
    }
export default usePopularMovie;