import { useEffect } from 'react';
import { Trending_api } from '../components/utilis/links';
import { useDispatch } from 'react-redux';
import { addPlayingMovie } from '../components/utilis/movieSlice';



const useNowPlayingMovie=()=>{ 
    const dispatch=useDispatch();
const Trendingapimovie=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?', Trending_api);
    const json= await data.json()
     dispatch(addPlayingMovie(json.results ));
  };
  useEffect(()=>{
     Trendingapimovie();
      },[]);
    }
export default useNowPlayingMovie;
