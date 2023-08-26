import React from 'react'

export default function search(){

    const baseURL = "https://api.themoviedb.org/3/search/movie?api_key=be5d56d0e1a93e5979e54101a7de3476&query="
    const imageURL = "https://image.tmdb.org/t/p/original"

    const searchKeyRef = React.useRef()
    const [searchKey, setSearchKey] = React.useState("")
    const [movies, setMovies] = React.useState([])

    function handleClick(event){
        event.preventDefault()
        return setSearchKey(searchKeyRef.current.value)
    }

    React.useEffect(() => {
        fetch(`${baseURL}${searchKey}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }, [searchKey])


    return(
        <div className="h-screen w-full flex flex-col place-items-center py-20">
            <form onSubmit={handleClick} className="searchBox relative w-1/2 my-8">
                <input
                    ref={searchKeyRef}
                    type="text" 
                    placeholder="Search..."
                    className="w-full px-6 py-2 rounded-xl text-2xl text-neutral-400 bg-neutral-900 focus:outline-none focus:outline-2 focus:outline-red-600"
                />
                <button type="submit"><span className="material-symbols-outlined absolute right-2 top-1 text-neutral-400 text-4xl hover:cursor-pointer">search</span></button>
            </form>
            <div className="searchedMovies text-white">
                
            </div>
        </div>
    )
}