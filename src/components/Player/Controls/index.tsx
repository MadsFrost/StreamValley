import React from 'react';
import PlayButton from './PlayButton';
import Wrapper from './ControlWrapper';

const Controls: React.FC = () => {
    return (
        <div className='flex flex-col items-end justify-end'>
            <Wrapper>
                <PlayButton />
            </Wrapper>
        </div>
    )
}

export default Controls;