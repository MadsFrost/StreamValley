import React from 'react';
import Logo from '../Logo';
import { useAuth } from '../../api/authentication/useAuth';
import { BsSpotify } from 'react-icons/bs';
const Start = () => {
    const { signInSpotify } = useAuth();
    const handleSpotifyLogin = () => {
        signInSpotify();
    }
    return (
        <div className="py-16 w-full h-full flex flex-col justify-between items-center bg-slate-500">
            <Logo />
            <button
            className='py-4 px-8 flex rounded-sm items-center'
            style={{ backgroundColor: '#1db954' }}
            onClick={handleSpotifyLogin}>
                <BsSpotify className='w-7 h-7 mr-4'/>
                Login with Spotify
            </button>
        </div>
    )
}

export default Start;