import React from 'react';
import Logo from '../Logo';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
export const Content = () => {
    const [authType, setAuthType] = React.useState<'login' | 'signup'>('login');
    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='p-8'>
              <Logo />
            </div>
            <div className='w-100 h-14 flex flex-row'>
              <span 
                onClick={() => setAuthType('login')}
                className={`transition transition-all mr-2 text-lg 
              font-bold w-full cursor-pointer ${authType === 'login' ? 'opacity-100' : 'opacity-50'}`}>
              Login
              </span>
              <span
                onClick={() => setAuthType('signup')} 
                className={`transition transition-all text-lg 
              font-bold w-full cursor-pointer ${authType === 'signup' ? 'opacity-100' : 'opacity-50'}`}>
                Signup
              </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
              {authType === 'login' ? <SignIn /> : <SignUp />}
            </div>
        </div>

    )
}