
import React from 'react'
import SearchHeader from './SearchHeader';
export interface SearchInput {
    callback: (query: string) => void;
}
const SearchInput: React.FC<SearchInput> = ({ callback }) => {
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget
        const inputs = form.elements as typeof form.elements & {
            search: HTMLInputElement
        }
        callback(inputs.search.value);
    }
    return (
    <form className='w-full' onSubmit={handleSearch}>
        <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
            </span>
            <input id="search" type="search" name="q" className="text-xl w-full py-4 text-white bg-gray-800 rounded-md pl-12 focus:outline-none focus:bg-gray-900 focus:text-white" placeholder="Search..." autoComplete="off" />
        </div>
    </form>
    )
}

export default SearchInput