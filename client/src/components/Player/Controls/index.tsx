import React from 'react';
import PlayButton from './PlayButton';
import Wrapper from './ControlWrapper';

interface ControlProps {
    children: React.ReactNode;
}
const Controls: React.FC<ControlProps> = (props) => {
    const { children } = props;
    return (
        <div className='flex flex-row'>
            {children}
            <Wrapper>
                <PlayButton />
            </Wrapper>
        </div>
    )
}

export default Controls;