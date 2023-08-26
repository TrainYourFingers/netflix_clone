
import React, {useState, useEffect} from "react"
import MovieRow from "./movieRow"
import Banner from "./banner.jsx"
import requests from "./request"

export default function home(){

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results)
        
            return request
        }
        fetchData()
    }, [])

    return(
        <div className="home h-max w-full text-white">
            <Banner 
                movie = {movie}
            />
            <MovieRow 
                title = "NETFLIX ORIGINALS"
                fetchURL = {requests.fetchNetflixOriginals}
                setMovie={setMovie}
            />
            <MovieRow 
                title = "TRENDING"
                fetchURL = {requests.fetchTrending}
                setMovie={setMovie}
            />
            <MovieRow 
                title = "TOP RATED"
                fetchURL = {requests.fetchTopRated}
                setMovie={setMovie}
            />
        </div>
    )
}