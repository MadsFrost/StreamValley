import React from 'react';
import { GoChevronDown, GoChevronUp, GoFoldUp } from 'react-icons/go';

interface TopContentProps {
    onClose: () => void;
    open: boolean;
}

const TopContent: React.FC<TopContentProps> = ({open, onClose }) => {
  return (
    <div className='flex flex-row justify-between text-3xl'>
        {open ? <GoChevronDown onClick={onClose}/> : <GoChevronUp />}
        <GoFoldUp />
    </div>
  )
}

export default TopContent