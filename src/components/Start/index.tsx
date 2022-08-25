import React from 'react';
import { Content } from './Content';
const Start = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between items-center bg-start bg-cover bg-center">
            <Content />
            <div className='w-72 py-8 flex flex-row justify-between w-full'>
                <span className='text-xs font-bold'>Terms of Service</span>
                <span className='text-xs font-bold'>Privacy Policy</span>
                <span className='text-xs font-bold'>About Us</span>
            </div>
        </div>
    )
}

export default Start;