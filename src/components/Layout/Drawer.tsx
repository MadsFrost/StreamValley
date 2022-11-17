import React from 'react'
import { BsYoutube, BsSpotify } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im';
import { AiFillSetting } from 'react-icons/ai';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse, TbPlayerTrackNext } from 'react-icons/tb';
import Logo from '../Logo';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { NavLink, useLocation } from 'react-router-dom';
import classnames from 'classnames';

const Drawer = () => {
  const { profile } = useSelector((state: RootState) => state);
  const [collapsed, setCollapsed] = React.useState(true);
  const collapse = () => {
	setCollapsed(true);
  }
  const location = useLocation();
  const player = {
	isYouTube: location.pathname === '/youtube',
	isSpotify: location.pathname ==='/spotify',
	isSoundcloud: location.pathname === '/soundcloud'
  }
  return (
	<div className={classnames(
		['h-full bg-gray-900 border-r-2 outline-none border-gray-800'],
		{
			['w-[100px]']: !collapsed,
			['w-[60px]']: collapsed,
			['bg-spotify border-spotify-secondary']: player.isSpotify,
			['bg-soundcloud border-soundcloud-secondary']: player.isSoundcloud,
			['bg-youtube border-youtube-secondary']: player.isYouTube
		}
	)}>
		<aside
			className="flex flex-col items-center shadow-xl h-full">

			<NavLink to="/" className="py-8 flex items-center w-full" onClick={collapse}>
				<a className="mx-auto flex flex-col items-center" href="http://svelte.dev/">
					{collapsed ? <Logo width={30} height={30} /> : <Logo width={40} height={40} />}
				</a>
			</NavLink>

			<ul className={classnames(
				['w-full'],
				{
					['bg-gray-900']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
					['bg-soundcloud-secondary']: player.isSoundcloud,
					['bg-youtube-secondary']: player.isYouTube,
					['bg-spotify-secondary']: player.isSpotify
				}
			)}>
				<li className={classnames(
								['w-full py-2'],
								{
									['hover:bg-gray-800']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['hover:bg-soundcloud']: player.isSoundcloud,
									['hover:bg-youtube']: player.isYouTube,
									['hover:bg-spotify']: player.isSpotify
								}
							)}>
					<NavLink
						onClick={collapse}
						to='/youtube'
						className="p-2 h-16 flex flex-col justify-center items-center w-full
						focus:text-orange-500">
						<BsYoutube className={
							classnames(
								{
									['text-youtube w-8 h-8']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['text-white w-8 h-8']: player.isSoundcloud || player.isYouTube || player.isSpotify,
								}
							)
						}/>
						{!collapsed && <span className='text-white font-semibold text-sm'>YouTube</span>}
					</NavLink>
				</li>

				<li className={classnames(
								['w-full py-2'],
								{
									['hover:bg-gray-800']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['hover:bg-soundcloud']: player.isSoundcloud,
									['hover:bg-youtube']: player.isYouTube,
									['hover:bg-spotify']: player.isSpotify
								}
							)}>
					<NavLink
						onClick={collapse}
						to="/soundcloud"
						className="p-2 h-16 flex flex-col justify-center items-center w-full
						focus:text-orange-500">
						<ImSoundcloud className={
							classnames(
								{
									['text-soundcloud w-8 h-8']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['text-white w-8 h-8']: player.isSoundcloud || player.isYouTube || player.isSpotify,
								}
							)
						} />
						{!collapsed && <span className='text-white font-semibold text-sm'>SoundCloud</span>}
					</NavLink>
				</li>

				{profile.disableSpotify && <li className={classnames(
								['w-full py-2'],
								{
									['hover:bg-gray-800']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['hover:bg-soundcloud']: player.isSoundcloud,
									['hover:bg-youtube']: player.isYouTube,
									['hover:bg-spotify']: player.isSpotify
								}
							)}>
					<NavLink
						onClick={collapse}
						to="/spotify"
						className="p-2 h-16 flex flex-col justify-center items-center w-full
						focus:text-orange-500">
						<BsSpotify className={
							classnames(
								{
									['text-spotify w-8 h-8']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['text-white w-8 h-8']: player.isSoundcloud || player.isYouTube || player.isSpotify,
								}
							)
						} />
						{!collapsed && <span className='text-white font-semibold text-sm'>Spotify</span>}
					</NavLink>
				</li>}

				<li className={classnames(
								['w-full py-2'],
								{
									['hover:bg-gray-800']: !player.isSoundcloud && !player.isYouTube && !player.isSpotify,
									['hover:bg-soundcloud']: player.isSoundcloud,
									['hover:bg-youtube']: player.isYouTube,
									['hover:bg-spotify']: player.isSpotify
								}
							)}>
					<NavLink
						onClick={collapse}
						to="/settings"
						className="p-2 h-16 flex flex-col justify-center items-center w-full
						focus:text-orange-500">
						<AiFillSetting className='text-white w-8 h-8' />
						{!collapsed && <span className='text-white font-semibold text-sm'>Settings</span>}
					</NavLink>
				</li>

			</ul>
		</aside>
	</div>
  )
}

export default Drawer