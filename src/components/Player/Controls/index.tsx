import React from 'react';
import PlayButton from './PlayButton';
import Control from './Control';
const Controls = () => {

    return (
        <div className='px-8 py-8 h-[80px] w-full fixed bottom-0 shadow flex justify-center items-center transition-all shadow-xl'
        >
            <Control>
                <PlayButton />
            </Control>
        </div>
    )
}

export default Controls;