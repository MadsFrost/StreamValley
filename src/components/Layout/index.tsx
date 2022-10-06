import React from 'react'
import Drawer from './Drawer';
import MiniControls from '../Player/MiniControls';
interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col w-full h-full bg-gray-900'>
        <div className='flex flex-row w-full h-full'>
          <Drawer />
          {children}
        </div>
        <MiniControls />
    </div>
  )
}

export default Layout;