import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { Track as TrackType } from '../../../state/player';
const Track = () => {
    const { cover, name } = useSelector((state: RootState) => state.player.track);
    const [trackInfo, setTrackInfo] = React.useState<Pick<TrackType, 'cover' | 'name'>>({ cover, name })

    React.useEffect(() => {
        setTrackInfo({
            cover, name
        })
    }, [cover, name])
    return ( 
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <img src={trackInfo.cover} />
            <p>{trackInfo.name}</p>
        </div>
    )
}

export default Track;