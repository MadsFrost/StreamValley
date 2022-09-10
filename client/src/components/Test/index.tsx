import React from 'react';
import ConnectSpotify from './ConnectSpotify';
import type { RootState } from '../../Store';
import { useSelector } from 'react-redux';
import Player from '../Player';
import { useDispatch } from 'react-redux';
import { setTrack, Track } from '../../state/player';

const Test = () => {
    const { disableSpotify } = useSelector((state: RootState) => state.profile)
    const dispatch = useDispatch();

    const setTrackTest = (uri: string) => {
        dispatch(setTrack(uri));
;    }

    return (
        <div>
            {!disableSpotify && <ConnectSpotify />}
            <button onClick={() => setTrackTest('https://www.youtube.com/watch?v=5Y8QuNAZ8iM')}>Set Track</button>
            <Player />
        </div>
    )
}

export default Test;