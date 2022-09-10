import React from 'react';
import ConnectSpotify from './ConnectSpotify';
import type { RootState } from '../../Store';
import { useSelector } from 'react-redux';
import Controls from '../Player/Controls';

const Home = () => {
    const { disableSpotify } = useSelector((state: RootState) => state.profile)
    return (
        <div>
            {!disableSpotify && <ConnectSpotify />}
            <Controls />
        </div>
    )
}

export default Home;