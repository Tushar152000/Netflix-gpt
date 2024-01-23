import React, { useRef, useState } from 'react'
// import Header from './Header'
import { background_img } from './utilis/links'
import {updateProfile } from "firebase/auth";
import {Validationfun} from './utilis/Validate';
import {auth} from './utilis/firebase';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Header from './Header';




const Login = () => {
  
    const[isSignUpform,setisSignUpForm]=useState(true);
    const[isErrorEmail,setisErrorEmail]=useState(null);
  
    const email=useRef(null);
    const password=useRef(null);

    const HandleButton = () => {
      const emailValue = email.current.value;
      const passwordValue = password.current.value;
      
      const message = Validationfun({ email: emailValue, password: passwordValue });
      // console.log(message);
      setisErrorEmail(message);
      if(message) return;
      if(!isSignUpform){
        //sign up logic


      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);


    // ...
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setisErrorEmail(errorCode+" "+errorMessage);
    
    // ..

  });



      }
      else{
        // sign in login
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
    const user = userCredential.user;
    // console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   setisErrorEmail(errorCode+" "+errorMessage);

  });

      }
  }

    const isToggleForm=()=>{
        setisSignUpForm(!isSignUpform);

   }
{/* <img className=' w-[15%]  z-3 px-8 bg-gradient-to-b from-black flex ' src='Netflix_Logo_PMS.png'/>  */}
  return (
    <div className='bg-gradient from-black '>
      <div className='absolute top-0 '>
  <Header/>
</div>
      
    <div className='absolute  '>
       
        <img className=' brightness-[50%] w-screen'  src={background_img}
       alt="bglogo"/>


 
       </div>
       <form onSubmit={e => e.preventDefault()}
        className='w-[28rem]   absolute  h-[42rem] p-10 bg-black  mx-auto my-[4rem] rounded-lg  left-0 right-0 text-white bg-opacity-[75%]  ' >
       <h1 className='font-bold  m-5 text-white text-3xl '>{isSignUpform ? 'Sign In':'Sign Up'}</h1>
        <input ref={email} type="text" name="email" placeholder='Email Address or Phone number' className='p-3  mx-2 m-4 w-full items-center bg-[#333]'/>
      
       {!isSignUpform && <input type='text' placeholder='Enter Your Name' className='p-3 m-4 w-full items-center mx-2 bg-[#333]'/>}
        <input ref={password} type='password' placeholder='Password' autoComplete='on' className='p-3 m-4 w-full items-center mx-2 bg-[#333]'/>
        <p className='text-red-500 items-center font-bold'>{isErrorEmail}</p>
        <button className='p-3 m-5 ml-2 w-full bg-red-500 items-center rounded-lg' onClick={HandleButton} >
          {isSignUpform ? 'Sign In':'Sign Up'}</button>
        <div className='flex items-center '>
  <input type='checkbox' className='text-white ml-2'/>
  <h1 className='text-gray-400 text-bold '>Remember me</h1>
  <a href='https://www.netflix.com/in/LoginHelp' target='' className='text-gray-400 ml-[9rem]'>Need help?</a>
</div>

<p className='p-1 m-2 text-white cursor-pointer ' onClick={isToggleForm}>{isSignUpform? "New to Netflix ? Sign Up Now":" Alredy Registered Sign in now" }</p>
<p className='m-1 mt-[70px]'>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
       </form>
    
    </div>
  )
}

export default Login;


//rafce - react arrow function arrow function component
 