export default function SearchBar() {
    return (
        <div className="flex items-center border-b-2 border-gray-200 pb-2 mb-2">
            <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search..."
                aria-label="Search clipboard"
            />
            <button
                className="flex-shrink-0 border-transparent border-4 text-teal-500 text-sm py-1 px-2 rounded"
                type="button"
            >
                Search
            </button>
        </div>
    )
};