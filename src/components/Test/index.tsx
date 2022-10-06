import React from 'react';
import ConnectSpotify from './ConnectSpotify';
import type { RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTrack } from '../../state/player';
import trackMetaData from '../../utils/trackMetaData';
const Test = () => {
    const { disableSpotify } = useSelector((state: RootState) => state.profile)
    const dispatch = useDispatch();

    const setTrackTest = async (uri: string) => {
        trackMetaData(uri).then((res) => {
            if (res !== undefined) {
                dispatch(setTrack(res))
            }
        })
    }

    return (
        <div className='w-full h-screen'>
            {disableSpotify && <ConnectSpotify />}
            <button onClick={() => setTrackTest('https://m.youtube.com/watch?v=OlXY0AJBtio')}>Set Track</button>
        </div>
    )
}

export default Test;