import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';

const Track = () => {
    const { cover, name } = useSelector((state: RootState) => state.player.track);
    return ( 
        <div>
            <img src={cover} />
            <p>{name}</p>
        </div>
    )
}

export default Track;