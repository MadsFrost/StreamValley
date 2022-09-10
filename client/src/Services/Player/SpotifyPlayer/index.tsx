import React from 'react';
import WebPlayback from 'react-spotify-web-playback';
import { ProgressProps } from '../index';
interface SpotifyPlayerProps {
    isPlaying?: boolean;
    initialVolume?: number;
    track: string;
    token?: string;
    progress: (state: ProgressProps) => void;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = (props) => {
    const { initialVolume, isPlaying, track, token = ''} = props;

    return (
        <WebPlayback
            initialVolume={initialVolume ?? 25}
            play={isPlaying}
            name='StreamValley App'
            showSaveIcon
            magnifySliderOnHover
            token={token}
            uris={track}
        />
    ) 
}

export default SpotifyPlayer;