import React from 'react'
import { BsYoutube, BsSpotify } from 'react-icons/bs'
import { ImSoundcloud } from 'react-icons/im';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setTrack, addToQueue, setPlaying } from '../../state/player';
import { verifySoundCloud, verifySpotify, verifyYouTube } from '../../utils/verifyLinks';
import { ItemsEntity as YouTubeResult } from '../../utils/YouTubeType';
import { Track } from '../../state/player';
import { generateTrack } from '../../utils/generateTrack';
import { MdQueue } from 'react-icons/md';
import { RiPlayListAddFill } from 'react-icons/ri';
export interface SearchResultProps {
    YouTube?: YouTubeResult;
    SoundCloud?: any;
    Spotify?: any;
}
const SearchResult: React.FC<SearchResultProps> = (props) => {
    const { YouTube, SoundCloud, Spotify } = props;
    const [queued, setQueued] = React.useState(false);
    const dispatch = useDispatch();

    const handlePlaySong = (song: Track) => {
        if (verifyYouTube(song.uri)) {
            dispatch(setTrack(song))
            dispatch(setPlaying(true))
        }
    }

    const handleAddToQueue = (song: Track) => {
        if (verifyYouTube(song.uri)) {
            dispatch(addToQueue(song))
        }
        setQueued(true);
        const interval = setInterval(() => {
            setQueued(false);
          }, 3000)
        return () => {
            clearInterval(interval)
        }
    }

    const handleAddToPlaylist = (song: string) => {
        
    }

    return (
    <div className='w-full h-full bg-gray-800 rounded-xl shadow-xl hover:transform hover:scale-105 cursor-pointer'>
        {YouTube && (
            <>
                <div className='flex flex-col h-full w-full'>
                <div className={`w-full h-[150px] bg-cover bg-center rounded-tr-xl rounded-tl-xl`} 
                    onClick={() => handlePlaySong(generateTrack(
                        `http://www.youtube.com/watch?v=${YouTube.id.videoId}`,
                        YouTube.snippet.thumbnails.high.url,
                        YouTube.snippet.title
                    ))}
                    style={{ backgroundImage: `url('${YouTube.snippet.thumbnails.high.url}')`}}
                />
                    <div className='p-3 flex flex-col'>
                        <div className='flex flex-col'>
                            <span className='text-md font-semibold'>{YouTube.snippet.title}</span>
                            <span className='text-md'>{YouTube.snippet.channelTitle}</span>
                        </div>
                    </div>
                </div>
                <div className='w-full flex items-center justify-end -mt-10 pr-8'>
                    <div className='mx-2 bg-gray-900 rounded-full p-3' onClick={() => handleAddToQueue(generateTrack(
                        `http://www.youtube.com/watch?v=${YouTube.id.videoId}`,
                        YouTube.snippet.thumbnails.high.url,
                        YouTube.snippet.title
                    ))}>
                        <div className='bg-gray-800 p-3 rounded-full'>
                            {queued ? <AiFillCheckCircle className='text-green-500 text-xl cursor-pointer'/> : <MdQueue className='text-purple-400 text-xl cursor-pointer' />}
                        </div>
                    </div>
                    <div className='mx-2 bg-gray-900 rounded-full p-3'>
                        <div className='bg-gray-800 p-3 rounded-full'>
                            <a  href={`http://www.youtube.com/watch?v=${YouTube.id.videoId}`}>
                                <RiPlayListAddFill className='text-purple-400 text-xl cursor-pointer' />
                            </a>
                        </div>
                    </div>
                    <div className='mx-2 bg-gray-900 rounded-full p-3'>
                        <div className='bg-gray-800 p-3 rounded-full'>
                            <a  href={`http://www.youtube.com/watch?v=${YouTube.id.videoId}`}>
                                <BsYoutube className='text-xl text-red-600 cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )}
        {SoundCloud && (
            <div>
                SoundCloud
            </div>
        )}
        {Spotify && (
            <div>
                Spotify
            </div>
        )}
    </div>
    )
}

export default SearchResult