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
import { formatHHMMSS } from '../../../utils/formatNumber';
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

                <div className='relative z-30'>
                    <Slider 
                        isPlaying={playing}
                        playedSeconds={progress.playedSeconds}
                        duration={duration}
                    />
                </div>
                <SwipeableViews animateTransitions ignoreNativeScroll resistance enableMouseEvents>
                    <div className={`border-gray-800 flex flex-row h-full items-center`}>
                        <img className='overflow-hidden absolute w-full h-[75px] z-0 opacity-20 object-cover object-center' src={cover} />
                        <img className='mt-1 object-cover h-[80px] w-[80px] relative z-10' id="mini-image" src={cover} />
                        <div onClick={togglePlaying} className='w-[75px] h-[75px] z-5 absolute left-15 bottom-1 text-2xl shadow-lg transition-all cursor-pointer'></div>
                        <div onClick={togglePlaying} className='text-white w-[75px] h-[50px] z-10 absolute left-7 bottom-0 text-2xl shadow-lg transition-all cursor-pointer'>{playing ? <Pause/> : <Play />}</div>
                        <div className='overflow-hidden p-3 flex flex-col w-full relative z-1 cursor-pointer' onClick={toggleModal}>
                            <span className='font-medium text-sm'>{name}</span>
                            <span className='text-sm flex flex-row items-center'>Playing from 
                                {isYouTube && <BsYoutube className='ml-2 text-xl text-youtube' />}
                                {isSoundcloud && <ImSoundcloud className='ml-2 text-xl text-soundcloud' />}
                                {isSpotify && <BsSpotify className='ml-2 text-xl text-spotify' />}
                            </span>
                            <span className='text-sm'>{formatHHMMSS(track.progress.playedSeconds)}-{formatHHMMSS(track.duration)}</span>
                        </div>
                    </div>
                    {queue.map((track) => ( 
                            <div className='border-gray-800 flex flex-row h-full items-center'>
                                 <img className='overflow-hidden absolute w-full h-full z-0 opacity-20 object-cover object-center' src={track.cover} />
                                 <img className='object-cover h-[80px] w-[80px]' id="mini-image" src={track.cover} />
                                 <div className='w-[75px] h-[75px] z-0 absolute left-15 bottom-2 text-2xl shadow-lg transition-all cursor-pointer'></div>
                                 <div className='text-white w-[75px] h-[50px] z-100 absolute left-7 bottom-1 text-2xl shadow-lg transition-all cursor-pointer'></div>
                                 <div className='overflow-hidden p-3 flex flex-col w-full relative z-1 cursor-pointer' onClick={toggleModal}>
                                         <span className='font-medium text-sm'>{track.name}</span>
                                         <span className='text-sm flex flex-row items-center'>Song from:
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