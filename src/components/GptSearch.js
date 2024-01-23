import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsearchpage from './Gptsearchpage'
import { background_img } from './utilis/links'

const GptSearch = () => {
  return (
    <div>
      <div  className='absolute -z-10'>
      <img className=' brightness-[50%] w-screen'  src={background_img}
       alt="bglogo"/>

      </div>
         

        <Gptsearchbar/> 
        <Gptsearchpage/>
      
    </div>
  )
}

export default GptSearch
