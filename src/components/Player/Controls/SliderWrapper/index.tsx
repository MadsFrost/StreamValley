import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Store';
import Slider from '../Slider';
import { formatHHMMSS } from '../../../../utils/formatNumber';

const SliderWrapper = () => {
    const { track, playing } = useSelector((state: RootState) => state.player);
    const { playedSeconds } = track.progress;
    return <div className='flex flex-row w-full justify-center'>
            <p className='pr-2 text-gray-200'>{formatHHMMSS(playedSeconds)}</p>
            <Slider
                isPlaying={playing}
                duration={track.duration}
                playedSeconds={playedSeconds}
            />
            <p className='pl-2 text-gray-200'>{formatHHMMSS(track.duration)}</p>
    </div>;
}

export default SliderWrapper;