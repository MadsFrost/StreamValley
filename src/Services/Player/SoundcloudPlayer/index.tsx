import React from 'react';
import SoundCloudPlayer from 'react-player/soundcloud';
import { ProgressProps } from '../index';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { useDispatch } from 'react-redux';
import { setSeek, setPlaying } from '../../../state/player';

interface SoundcloudPlayerProps {
    progress: (state: ProgressProps) => void;
    duration: (state: number) => void;
}

const SoundcloudPlayer: React.FC<SoundcloudPlayerProps> = (props) => {
    const { progress, duration } = props;
    const { playing } = useSelector((state: RootState) => state.player);
    const SCPlayerRef = React.useRef<any>(null);
    const { seek, uri } = useSelector((state: RootState) => state.player.track);
    const dispatch = useDispatch();
    React.useEffect(() => {
        if (seek !== undefined) {
            SCPlayerRef.current.seekTo(seek);
            dispatch(setSeek(undefined));
        }
    }, [seek])

    return (
        <SoundCloudPlayer
            ref={SCPlayerRef} 
            onDuration={duration}
            onProgress={progress}
            playing={playing}
            url={uri}
        />
    )
}

export default SoundcloudPlayer;