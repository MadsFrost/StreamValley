import React from 'react';
import Controls from './Controls';
import Track from './Track';

const Player = () => {
    return (
        <div className='pb-12 transition-all'>
            <Controls>
                <Track />
            </Controls>
        </div>
    )
}

export default Player;