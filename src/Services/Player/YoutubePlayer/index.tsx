import React from 'react';
import YTPlayer from 'react-player/youtube';
import { ProgressProps } from '../index';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { useDispatch } from 'react-redux';
import { setSeek, setPlaying, goNext } from '../../../state/player';
interface YoutubePlayerProps {

    progress: (state: ProgressProps) => void;
    duration: (state: number) => void;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = (props) => {
    const { progress, duration } = props;
    const YTPlayerRef = React.useRef<any>(null);
    const { initialLoad, track, playing } = useSelector((state: RootState) => state.player);
    const [ready, setReady] = React.useState<boolean>(false);
    const { seek, uri } = track;
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (seek !== undefined) {
            YTPlayerRef.current.seekTo(seek);
            dispatch(setSeek(undefined))
        }
    }, [seek])

    const onReady = () => {
        if (!initialLoad) {
            dispatch(setPlaying(true));
        }
    }


    const onEnd = () => {
        dispatch(goNext())
    }

    return (
        <YTPlayer
            playsinline
            onEnded={onEnd}
            onReady={onReady}
            ref={YTPlayerRef} 
            onDuration={duration}
            onProgress={progress}
            playing={playing}
            url={uri}
            onError={(e) => alert(e)}
        />
    )
}

export default YoutubePlayer;