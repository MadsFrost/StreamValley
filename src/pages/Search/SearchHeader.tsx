import React from 'react'
import BgOne from '../../assets/control.jpg';
import BgTwo from '../../assets/techno.jpg';

export interface SearchHeaderProps {
  children: React.ReactNode | React.ReactNode[];
}
const SearchHeader: React.FC<SearchHeaderProps> = ({ children }) => {
  const switchDate = new Date().getUTCHours() % 2 === 0
  return (
    <div className='w-full h-full px-6 p-2'>
      <div className='relative z-10 flex flex-col gap-0 justify-center items-center w-full h-40'>
        <h1 className='-ml-4 font-semibold text-center'>Search Songs <h2 className='text-sm'>From YouTube, SoundCloud and Spotify</h2></h1>
      </div>
      {children}
    </div>
  )
}

export default SearchHeader