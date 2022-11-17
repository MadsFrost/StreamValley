import React from 'react';
import PlayButton from './PlayButton';
import Wrapper from './ControlWrapper';

interface ControlsProps {
    elevated?: boolean;
}
const Controls: React.FC<ControlsProps> = ({ elevated = false }) => {
    return (
        <div className={`flex flex-col items-end justify-end ${elevated ? 'fixed z-10' : ''}`}>
            <Wrapper>
                <PlayButton />
            </Wrapper>
        </div>
    )
}

export default Controls;