import React from 'react';
import { FiSkipBack as Previous, FiSkipForward as Next } from 'react-icons/fi';
import SliderWrapper from '../SliderWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { goNext, goBack } from '../../../../state/player';
import { RootState } from '../../../../Store';
import classnames from 'classnames';

interface ControlProps {
    children: React.ReactNode;
}
const ControlWrapper: React.FC<ControlProps> = (props) => {
    const { children } = props;
    const { queue, oldQueue } = useSelector((state: RootState) => state.player);
    console.log(queue.length, oldQueue.length)

    const controlStyleBack = classnames('mx-6 text-3xl shadow-3xl',
        {
            ['text-white']: oldQueue?.length >= 1,
            ['text-app-tertiary']: oldQueue.length === 0 
        }
    )
    const controlStyleNext = classnames('mx-6 text-3xl shadow-3xl',
        {
            ['text-white']: queue?.length >= 1,
            ['text-app-tertiary']: queue.length === 0 
        }
    )
    const dispatch = useDispatch();

    const handlePrev = () => {
        dispatch(goBack());
    }

    const handleNext = () => {
        dispatch(goNext());
    }
    return (
        <div className='h-full flex-col w-full flex'>
            <div>
                <SliderWrapper />
            </div>
            <div className='flex justify-center items-center w-full mt-3'>
                <Previous onClick={handlePrev} className={controlStyleBack}/>
                {children}
                <Next onClick={handleNext} className={controlStyleNext} />
            </div>
        </div>
    )
}

export default ControlWrapper;