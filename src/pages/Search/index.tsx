import React from 'react';
import SearchInput from './SearchInput';
import SearchHeader from './SearchHeader';
import SearchResult from './SearchResult';
import SearchGrid from './SearchGrid';
import axios from 'axios';
import { YouTubeResult } from '../../utils/YouTubeType';
const Search = () => {
    const [query, setQuery] = React.useState('');
    const [results, setResults] = React.useState<YouTubeResult | undefined>();
    const [loading, setLoading] = React.useState<boolean>();
    const handleSearchQuery = async (query: string) => {
        setQuery(query);
    }

    React.useEffect(() => {
        setLoading(true);
        axios.request({
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
            q: query,
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '25'
            },
            headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_KEY || '',
            'X-RapidAPI-Host': process.env.REACT_APP_YOUTUBE_HOST || ''
            }
        })
        .then((res: any) => {
            setResults(res.data);
        })
        setLoading(false);
    }, [query])
    
    return (
        <div className="overflow-y-scroll flex w-full flex-col bg-gray-900">
            <SearchHeader>
                <SearchInput callback={handleSearchQuery} />
            </SearchHeader>
            {!loading && <SearchGrid>
                {results?.items?.map((result) => <SearchResult YouTube={result} />)}
            </SearchGrid>}
        </div>
    )
}

export default Search