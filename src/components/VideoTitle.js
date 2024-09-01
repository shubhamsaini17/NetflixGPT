import React from 'react';
import { Info, Play } from 'lucide-react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-extrabold'>{title}</h1>
      <p className='py-6 text-lg font-lg w-1/3 opacity-40'>{overview}</p>
      <div className='flex'>
        <button className='bg-white text-black py-2 px-6 text-xl rounded-md mr-4 font-semibold flex hover:bg-opacity-80'><span className='pt-1 pr-1'><Play/></span>Play</button>
        <button className='bg-gray-500 text-white py-2 px-6 text-xl rounded-md bg-opacity-40 hover:bg-opacity-80 flex'><span className='pt-1 pr-1'><Info/></span>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
