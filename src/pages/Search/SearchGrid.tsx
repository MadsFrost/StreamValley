import React from 'react'

export interface SearchGridProps {
    children: React.ReactNode | React.ReactNode[];
}
const SearchGrid: React.FC<SearchGridProps> = ({ children }) => {
  return (
    <div className='grid gap-8 rounded-md px-6 sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-[100px] p-2'>
        {children}
    </div>
  )
}

export default SearchGrid