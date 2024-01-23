import { useEffect } from 'react';
import { Trending_api } from '../components/utilis/links';
import { useDispatch } from 'react-redux';
import { addtopratedMovie } from '../components/utilis/movieSlice';



const useTopratedMovie=()=>{ 
    const dispatch=useDispatch();
const topratedmovie=async ()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated', Trending_api);
    const json= await data.json()
     dispatch(addtopratedMovie(json.results ));
  };
  useEffect(()=>{
    topratedmovie();
      },[]);
    }
export default useTopratedMovie;