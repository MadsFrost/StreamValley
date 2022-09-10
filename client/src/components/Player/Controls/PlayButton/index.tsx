import React from 'react';
import { FiPlay as Play, FiPause as Pause } from 'react-icons/fi';
import { setPlaying } from '../../../../state/player';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Store';
import '../animations.css';

const PlayButton: React.FC = () => {
    const { playing } = useSelector((state: RootState) => state.player);
    const toggleAnimation = `${playing ? 'inner_circle' : 'inner_circle_paused'} flex bg-app justify-center items-center`;
    const dispatch = useDispatch();

    const togglePlaying = () => {
        dispatch(setPlaying(!playing));
    }
    return (
        <div className="outer_circle transition transition-all">
            <div className={toggleAnimation}
                onClick={togglePlaying}
                style={{ 
                    width: '70px',
                    height: '70px',
                    position: 'relative',
                    top: '5px',
                    left: '5px',
                    borderRadius: '1000px'
                }}
            >
                {playing ? 
                <Pause 
                    fontSize='35px'
                /> : 
                <Play 
                    fontSize='35px' 
                    className='pl-1'
                />}
            </div>
        </div>
    )
}

export default PlayButton;