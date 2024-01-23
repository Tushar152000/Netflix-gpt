import React, { useState ,useEffect } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai';
import {BiPencil} from 'react-icons/bi';
import {RiAccountCircleLine} from 'react-icons/ri';
import { Supported_lan, children_img } from './utilis/links';
import {BsQuestion} from 'react-icons/bs';
import {BsCaretDown} from 'react-icons/bs';
import { auth } from './utilis/firebase';
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import { RemoveUsers, addusers } from './utilis/userSlice'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { gpttogglesearch } from './utilis/GptSearchtoggle';
import { changeLanguage } from './utilis/langConfig';


const Header = () => {
  const [showList, setShowList] = useState(false);
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const showgptpage=useSelector((store)=>store.gpt.togglegpt);


  const gptsearchtogglebutton=()=>{
    dispatch(gpttogglesearch());  
  }
  const handleLanguage=(e)=>{
     console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
   }

  useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
      // use while the user Sign in or Sign Out
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addusers({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
  
        }))
      
      navigate('/browse')

      } 
  
      else {
        // User is signed out
        dispatch(RemoveUsers());
        navigate('/');
  
      }
    });
    return ()=> unsubscribe();
    
  },[])
  const handleMouseOver = () => {
    setShowList(true);
  };

  const handleMouseLeave = () => {
    setShowList(false);
  };
  const Signouthere=()=>{
  signOut(auth).then(() => {
  // Sign-out successful.


}).catch((error) => {
  // An error happened.
  navigate('./error');

});


    


  }
  return (
    <div className='flex flex-col relative'>
    <div className='absolute  w-screen px-5  flex z-10  bg-gradient-to-b from-black'>
     <img className=' w-44' src='Netflix_Logo_PMS.png' alt='netlifleft'/>
    { user&& <ul className='flex p-4 gap-3 text-white items-center cursor-pointer' >
      <li >Home</li>
      <li >TV Show</li>
      <li >Movies</li>
      <li >New & Popular</li>
      <li>My List</li>
     </ul> 
     }
     

     
     { user&&  <div className='flex  gap-2 items-center'>
    {showgptpage && (<select className='bg-black text-white bg-opacity-10  ' onClick={handleLanguage}> {Supported_lan.map(lang=> <option key={lang.identifier} value={lang.identifier} >{lang.name}</option> )}
  
      </select>
      )}
       <button onClick={gptsearchtogglebutton} className='m-2 p-2 ml-[37rem]  bg-red-600 text-white rounded-lg bg-opacity-30 '>{showgptpage?"Home":"Gpt Search"}</button>
      <img src='https://occ-0-6071-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
      alt='account_logo'
      className='h-10 w-11  rounded-lg '
      />
    
      <AiOutlineCaretDown 
          className='text-black' 
          onMouseOver={handleMouseOver}
          onMouseUpCapture={handleMouseLeave}
        />
  
      
      </div>}
     
    </div>

   {/* { user &&<div className=' flex   mt-20 border  border-red-600 justify-end  '> */}
 {user && <div className='h-[15rem] w-[12rem] absolute  mx-[74rem]  mt-20 z-10 '>
    {showList && (
      <ul className='list-none p-4 py-3 w-full  bg-black opacity-1 cursor-pointer rounded-lg relative '>
      <li className='text-white m-3 flex items-center gap-3 hover:underline'> <img src={children_img} alt='child'/>Children</li>
      <li className='text-white m-3  flex items-center gap-3 hover:underline '><BiPencil className='text-2xl'/> Profile</li>
      <li className='text-white m-3 flex items-center gap-3 hover:underline'><RiAccountCircleLine className='text-2xl'/>Account</li>
      <li className='text-white m-3 flex items-center gap-3 hover:underline'><BsQuestion className='text-2xl'/>Help Center</li>
      <hr className='font-bold m-0 w-full' />
      <li className='text-white m-3  flex items-center justify-center hover:underline gap-3 ml-2 '><BsCaretDown className='text-2xl hover:bg-white'/><button onClick={Signouthere}>Sign Out</button></li>
    </ul>
    )}
  </div>}
   
{/* </div>  */}

    </div>
    
  )
}

export default Header;

