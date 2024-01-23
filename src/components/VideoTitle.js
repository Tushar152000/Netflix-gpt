import React from 'react'
import {FaPlay} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';

const VideoTittle = ({title,View}) => {
  return (
    <div className='p-9  mb-[25rem] aspect-video  absolute bg-gradient-to-r from-black '>
      <h1 className='font-bold text-4xl text-white mt-[17rem]'>{title}</h1>
      <h1 className='w-1/3 mb-[1rem]  text-white'>{View}</h1>
      <div className='flex mb-[15rem]'>
      <button className='p-3 items-center flex m-2 bg-gray-300 px-7 gap-1 justify-center rounded-lg hover:bg-opacity-[70%]'> <FaPlay className='text-2xl'/>Play</button>
      <button className='p-3 items-center flex m-2 bg-gray-300 px-7 gap-2 justify-center rounded-lg hover:bg-opacity-[70%]'> <AiOutlineInfoCircle className='text-2xl'/>More Info</button>
    </div>
    </div>
  )
}

export default VideoTittle
