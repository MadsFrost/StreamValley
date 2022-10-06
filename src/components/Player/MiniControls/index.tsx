import React from 'react'
import ControlModal from '../ControlModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { BsYoutube, BsSpotify } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im';
import Slider from '../../Player/Controls/SliderWrapper/Slider';
import { extractColorsFromImageData } from 'extract-colors';

const MiniControls = () => {
  const [isOpen, setOpen] = React.useState(false);
  const { playing, isSoundcloud, isSpotify, isYouTube ,track } = useSelector((state: RootState) => state.player);
  const { cover, name, duration, progress } = track;

  const toggleModal = () => {
    setOpen(!isOpen)
  }

  const getColors = () => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function(){
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = 100;
        canvas.width = 100;
        context?.drawImage(canvas, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        console.log(extractColorsFromImageData(dataURL))
     };
    image.src='https://linguaholic.com/linguablog/wp-content/uploads/2019/10/WhatIsTheMeaningOfXD-compress.jpg.webp';
  }

  getColors();

  return (
            <div className='h-[80px] w-full'>
                <ControlModal open={isOpen} onClose={toggleModal}/>
                <Slider 
                    isPlaying={playing}
                    playedSeconds={progress.playedSeconds}
                    duration={duration}
                />
                <div onClick={toggleModal} className='border-t-2 border-gray-800 flex flex-row h-full'>
                    <img id="mini-image" src={cover} width='75px' height='50px'/>
                    <div className='p-3 flex flex-col'>
                        <span className='font-medium text-sm'>{name}</span>
                        <span className='text-sm flex flex-row items-center'>Playing from 
                            {isYouTube && <BsYoutube className='ml-2 text-xl text-youtube' />}
                            {isSoundcloud && <ImSoundcloud className='ml-2 text-xl text-soundcloud' />}
                            {isSpotify && <BsSpotify className='ml-2 text-xl text-spotify' />}
                        </span>
                    </div>
                </div>
            </div>
       )
}

export default MiniControls