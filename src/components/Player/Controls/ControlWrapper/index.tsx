import React from 'react';
import { FiSkipBack as Previous, FiSkipForward as Next } from 'react-icons/fi';
import SliderWrapper from '../SliderWrapper';
interface ControlProps {
    children: React.ReactNode;
    onPrevious?: () => void;
    onNext?: () => void;
}
const ControlWrapper: React.FC<ControlProps> = (props) => {
    const { children, onPrevious, onNext } = props;
    const controlStyle = 'mx-6 text-3xl text-app-tertiary shadow-3xl'
    return (
        <div className='h-full flex-col w-full flex'>
            <div>
                <SliderWrapper />
            </div>
            <div className='flex justify-center items-center w-full mt-3'>
                <Previous className={controlStyle}/>
                {children}
                <Next className={controlStyle} />
            </div>
        </div>
    )
}

export default ControlWrapper;