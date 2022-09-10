import React from 'react';
import YTPlayer from 'react-player/youtube';
import { ProgressProps } from '../index';

interface YoutubePlayerProps {
    isPlaying?: boolean;
    track: string;
    progress: (state: ProgressProps) => void;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = (props) => {
    const { isPlaying, track, progress } = props;
    return (
        <YTPlayer
            playing={isPlaying}
            url={track}
            onProgress={progress}
        />
    )
}

export default YoutubePlayer;