import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from '../components/utilis/movieSlice';
import { Trending_api } from '../components/utilis/links'
const useBackGroundVideo=(movieId)=>{
    const dispatch=useDispatch();
    const backgroundvideo=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos',Trending_api); // Here we are passing the Movie Id for Dynamic Access
        const json=await data.json();
        // console.log(json);
        const filtertrailer=json.results.filter((video)=>video.type==='Trailer');
        const trailer=filtertrailer.length?filtertrailer[0]:json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));


  }
useEffect(()=>{
  backgroundvideo();
},[]); 
}
export default useBackGroundVideo;
