import React from 'react';
import ReactSlider from 'react-slider';
import { useDispatch } from 'react-redux';
import { setSeek } from '../../../../state/player';

interface SliderProps {
    playedSeconds: number;
    duration: number;
    isPlaying: boolean;
}

const Slider: React.FC<SliderProps> = (props) => {
    const { playedSeconds, duration } = props;
    const [played, setPlayed] = React.useState<number>(playedSeconds);
    const dispatch = useDispatch();
    const seekTo = (seek: number) => {
        dispatch(setSeek(seek));
        setPlayed(seek);
    }

    React.useEffect(() => {
        setPlayed(playedSeconds);
    }, [playedSeconds])
    return (
        <ReactSlider
            className='w-full flex justify-center items-center'
            trackClassName='slider t-8 h-[8px] bg-purple-900 opacity-50 rounded-full'
            markClassName='rounded-full h-8 w-8 bg-purple-300'
            thumbClassName='rounded-full bg-purple-600 shadow-3xl w-4 h-4'
            min={0}
            value={played}
            max={duration}
            onSliderClick={seekTo}
            thumbActiveClassName='bg-purple-800'
            
        />
    )
}

export default Slider;