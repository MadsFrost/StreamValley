import React from 'react'
import ControlModal from '../ControlModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { BsYoutube, BsSpotify } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im';
import { FiPlay as Play, FiPause as Pause } from 'react-icons/fi';
import { setPlaying } from '../../../state/player';
import { useDispatch } from 'react-redux';
import Slider from '../../Player/Controls/SliderWrapper/Slider';
import SwipeableViews from 'react-swipeable-views';
import { verifySoundCloud, verifyYouTube, verifySpotify } from '../../../utils/verifyLinks';
const MiniControls = () => {
  const [isOpen, setOpen] = React.useState(false);
  const { queue, playing, isSoundcloud, isSpotify, isYouTube, track } = useSelector((state: RootState) => state.player);
  const { cover, name, duration, progress } = track;
  const dispatch = useDispatch();

  const togglePlaying = () => {
      dispatch(setPlaying(!playing));
  }

  const toggleModal = () => {
    setOpen(!isOpen)
  }

  return (
            <div className='h-[80px] w-full'>
                <ControlModal open={isOpen} onClose={toggleModal}/>
                <Slider 
                    isPlaying={playing}
                    playedSeconds={progress.playedSeconds}
                    duration={duration}
                />
                <SwipeableViews animateTransitions ignoreNativeScroll resistance enableMouseEvents>
                    <div className='border-t-2 border-gray-800 flex flex-row h-full items-center'>
                        <img className='object-cover' id="mini-image" src={cover} width='75px' height='75px'/>
                        <div className='bg-app w-[75px] opacity-30 h-[75px] z-5 absolute left-15 bottom-1 text-2xl shadow-lg transition-all cursor-pointer'></div>
                        <div className='text-white w-[75px] h-[50px] z-10 absolute left-7 bottom-0 text-2xl shadow-lg transition-all cursor-pointer' onClick={togglePlaying}>{playing ? <Pause/> : <Play />}</div>
                            <div className='p-3 flex flex-col w-full cursor-pointer hover:bg-gray-800' onClick={toggleModal}>
                                <span className='font-medium text-sm'>{name}</span>
                                <span className='text-sm flex flex-row items-center'>Playing from 
                                    {isYouTube && <BsYoutube className='ml-2 text-xl text-youtube' />}
                                    {isSoundcloud && <ImSoundcloud className='ml-2 text-xl text-soundcloud' />}
                                    {isSpotify && <BsSpotify className='ml-2 text-xl text-spotify' />}
                                </span>
                        </div>
                    </div>
                    {queue.map((track) => ( 
                            <div className='border-t-2 border-gray-800 flex flex-row h-full items-center'>
                                 <img className='object-cover' id="mini-image" src={track.cover} width='75px' height='75px'/>
                                 <div className='bg-app w-[75px] opacity-30 h-[75px] z-0 absolute left-15 bottom-2 text-2xl shadow-lg transition-all cursor-pointer'></div>
                                 <div className='text-white w-[75px] h-[50px] z-100 absolute left-7 bottom-1 text-2xl shadow-lg transition-all cursor-pointer'></div>
                                     <div className='p-3 flex flex-col w-full cursor-pointer hover:bg-gray-800'>
                                         <span className='font-medium text-sm'>{track.name}</span>
                                         <span className='text-sm flex flex-row items-center'>Playing from 
                                             {verifyYouTube(track.uri) && <BsYoutube className='ml-2 text-xl text-youtube' />}
                                             {verifySoundCloud(track.uri) && <ImSoundcloud className='ml-2 text-xl text-soundcloud' />}
                                             {verifySpotify(track.uri) && <BsSpotify className='ml-2 text-xl text-spotify' />}
                                         </span>
                                 </div>
                             </div>
                            ))}
                </SwipeableViews>
            </div>
       )
}

export default MiniControls