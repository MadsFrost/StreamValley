import React from 'react';
import Test from '../../assets/cylinder.png';
import { useHistory } from 'react-router';
const Introduction: React.FC = () => {
    const history = useHistory();
    return (
        <div className='bg-white w-full h-full justify-center items-center'>
            <div className='pt-20 flex flex-col w-full justify-center items-center'>
                <h1 className='text-yellow-300 font-semibold text-4xl'>StreamRoom</h1>
                <span className='text-black font-semibold'>YouTube, Spotify and SoundCloud all in one.</span>
                <div className='flex flex-row w-full justify-center items-center pt-4'>
                    <button 
                    onClick={() => history.push('/sign-in')}
                    className='bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded mr-4 cursor-pointer'>Login</button>
                    <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded cursor-pointer'>Create an account</button>
                </div>

            </div>
            <img className='fixed inset-x-0 mx-auto bottom-0' src={Test} width="100%" height="100%" />
        </div>
    )
}

export default Introduction;