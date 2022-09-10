import React from 'react';
import SCPlayer from './SoundcloudPlayer';
import SpotifyPlayer from './SpotifyPlayer';
import YoutubePlayer from './YoutubePlayer';

import type { RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setProgress, setDuration } from '../../state/player';

export interface ProgressProps {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
}
const Player = () => {
    const { isSoundcloud, isSpotify, isYouTube, track, playing} = useSelector((state: RootState) => state.player);
    const dispatch = useDispatch();
    const progress = (progress: ProgressProps) => {
        dispatch(setProgress(progress));
    };

    const duration = (duration: number) => {
        dispatch(setDuration(duration));
    }
    return (
        <div className='flex flex-col hidden'>
            {isSoundcloud && <SCPlayer 
                track={track.uri} 
                isPlaying={playing} 
                progress={progress}
                duration={duration}
            />}
            {isSpotify && <SpotifyPlayer 
                track={track.uri}
                isPlaying={playing}  
                progress={progress}  
            />}
           {isYouTube && <YoutubePlayer 
                track={track.uri}
                isPlaying={playing}
                progress={progress}
            />}
        </div>
    )
}

export default Player;