import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Store';
import { BsYoutube, BsSpotify } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im';
import ModalControl from '../ModalControl';
const Content = () => {
  const { track, isSoundcloud, isSpotify, isYouTube } = useSelector((state: RootState) => state.player);
  const { cover, name } = track;

  return (
      <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='w-screen h-screen fixed z-1 bg-black'>
            <img className='relative z-0 w-full h-full object-cover opacity-30' src={cover} />
          </div>
          <div className='relative z-2 pt-4 flex flex-col justify-center items-center text-center'>
            <img className='rounded-sm w-[400px] h-[400px] sm:h-[300px] sm:w-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] m-4 object-cover' src={cover} />
            <span className='pt-4 text-white font-bold text-xl'>{name}</span>
            <span className='text-white font-medium text-md flex flex-row items-center'>Playing from 
            {isSoundcloud && <ImSoundcloud className='text-soundcloud text-2xl ml-3' />}
            {isYouTube && <BsYoutube className='text-youtube text-2xl ml-3' />}
            {isSpotify && <BsSpotify className='text-spotify text-2xl ml-3' />}
            </span>
          </div>
          <div className='w-full z-20 flex justify-center items-center px-1 pt-6'>
            <ModalControl />
          </div>
      </div>
  )
}

export default Content;