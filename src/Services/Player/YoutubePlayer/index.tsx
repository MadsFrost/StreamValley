import React from 'react';
import YTPlayer from 'react-player/youtube';
import { ProgressProps } from '../index';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { useDispatch } from 'react-redux';
import { setSeek, setPlaying } from '../../../state/player';
interface YoutubePlayerProps {

    progress: (state: ProgressProps) => void;
    duration: (state: number) => void;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = (props) => {
    const { progress, duration } = props;
    const YTPlayerRef = React.useRef<any>(null);
    const { track, playing } = useSelector((state: RootState) => state.player);
    const { seek, uri } = track;
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (seek !== undefined) {
            YTPlayerRef.current.seekTo(seek);
            dispatch(setSeek(undefined))
        }
    }, [seek])

    return (
        <YTPlayer
            ref={YTPlayerRef} 
            onDuration={duration}
            onProgress={progress}
            playing={playing}
            url={uri}
        />
    )
}

export default YoutubePlayer;