import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Store';
import { formatHHMMSS
 } from '../../../../utils/formatNumber';
 import ControlWrapper from '../../Controls/ControlWrapper';
 import PlayButton from '../../Controls/PlayButton';
export interface ModalControl {}
const ModalControl = () => {
    const { track, playing } = useSelector((state: RootState) => state.player);
    const { playedSeconds } = track.progress;
  return (
    <div className='w-full flex flex-col items-center justify-center z-20 lg:w-1/2 md:w-4/5 sm:w-3/4'>
        <ControlWrapper>
            <PlayButton />
        </ControlWrapper>
    </div>
  )
}

export default ModalControl