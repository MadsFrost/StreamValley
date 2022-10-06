import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Store';
import { BsYoutube, BsSpotify } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im';

const MiddleContent = () => {
  const { track, isSoundcloud, isSpotify, isYouTube } = useSelector((state: RootState) => state.player);
  const { cover, name } = track;

  return (
      <div className='flex flex-col px-2 py-8 ml-2 justify-center items-center'>
          <img className='w-[500px] h-[360px] object-cover' src={cover} />
          <div className='pt-4 flex flex-col justify-center items-center text-center'>
            <span className='pt-4 text-white font-bold text-xl'>{name}</span>
            <span className='text-white font-medium text-md flex flex-row items-center'>Playing from 
            {isSoundcloud && <ImSoundcloud className='text-soundcloud text-2xl ml-3' />}
            {isYouTube && <BsYoutube className='text-youtube text-2xl ml-3' />}
            {isSpotify && <BsSpotify className='text-spotify text-2xl ml-3' />}
            </span>
          </div>
      </div>
  )
}

export default MiddleContent