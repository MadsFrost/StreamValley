import React from 'react';
import { GoChevronDown, GoChevronUp, GoFoldUp } from 'react-icons/go';

interface TopContentProps {
    onClose: () => void;
    open: boolean;
}

const TopContent: React.FC<TopContentProps> = ({ open, onClose }) => {
  return (
    <div className='fixed z-10 w-full h-full p-4 flex flex-row justify-between text-3xl'>
        {open ? <GoChevronDown onClick={onClose} className='text-4xl' /> : <GoChevronUp className='text-4xl' />}
        <GoFoldUp className='text-4xl' />
    </div>
  )
}

export default TopContent